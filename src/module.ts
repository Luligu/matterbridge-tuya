import { MatterbridgeDynamicPlatform } from 'matterbridge';
import type { PlatformConfig, PlatformMatterbridge } from 'matterbridge';
import { type AnsiLogger } from 'matterbridge/logger';

/**
 * This is the standard interface for Matterbridge plugins.
 * Each plugin should export a default function that follows this signature.
 *
 * @param {PlatformMatterbridge} matterbridge - An instance of MatterBridge. This is the main interface for interacting with the MatterBridge system.
 * @param {AnsiLogger} log - An instance of AnsiLogger. This is used for logging messages in a format that can be displayed with ANSI color codes.
 * @param {PlatformConfig} config - The platform configuration.
 * @returns {TuyaPlatform} - An instance of the TuyaPlatform. This is the main interface for interacting with the Tuya system.
 */
export default function initializePlugin(matterbridge: PlatformMatterbridge, log: AnsiLogger, config: PlatformConfig): TuyaPlatform {
  return new TuyaPlatform(matterbridge, log, config);
}

export class TuyaPlatform extends MatterbridgeDynamicPlatform {
  constructor(matterbridge: PlatformMatterbridge, log: AnsiLogger, config: PlatformConfig) {
    super(matterbridge, log, config);

    // Verify that Matterbridge is the correct version
    if (typeof this.verifyMatterbridgeVersion !== 'function' || !this.verifyMatterbridgeVersion('3.8.0')) {
      throw new Error(`This plugin requires Matterbridge version >= "3.8.0". Please update Matterbridge to the latest version in the frontend.`);
    }

    this.log.info(`Initializing platform: ${this.config.name}`);

    this.log.info(`Finished initializing platform: ${this.config.name}`);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  override async onStart(reason?: string): Promise<void> {
    this.log.info(`onStart called with reason: ${reason ?? 'No reason provided'}`);
  }

  override async onConfigure(): Promise<void> {
    await super.onConfigure();
    this.log.info('onConfigure called');
  }

  override async onShutdown(reason?: string): Promise<void> {
    await super.onShutdown(reason);
    this.log.info(`onShutdown called with reason: ${reason ?? 'No reason provided'}`);
    if (this.config.unregisterOnShutdown) await this.unregisterAllDevices();
  }
}
