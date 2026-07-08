/**
 * @file src/module.ts
 * @description This file contains the class TuyaPlatform.
 * @author Luca Liguori
 * @created 2024-08-28
 * @version 1.0.0
 * @license Apache-2.0
 *
 * Copyright 2024, 2025, 2026 Luca Liguori.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MatterbridgeDynamicPlatform, type PlatformConfig, type PlatformMatterbridge } from 'matterbridge';
import type { AnsiLogger } from 'matterbridge/logger';

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
    if (typeof this.verifyMatterbridgeVersion !== 'function' || !this.verifyMatterbridgeVersion('3.9.0')) {
      throw new Error(`This plugin requires Matterbridge version >= "3.9.0". Please update Matterbridge to the latest version in the frontend.`);
    }

    this.log.info(`Initializing platform: ${this.config.name}`);

    this.log.info(`Finished initializing platform: ${this.config.name}`);
  }

  // oxlint-disable-next-line typescript/require-await
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
