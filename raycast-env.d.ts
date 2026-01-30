/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Yandex OAuth Client ID - From your Yandex OAuth app (oauth.yandex.com). Required for connection. */
  "clientId": string,
  /** Callback URL - Must match the Callback URL in your Yandex app. Leave default unless you use a different one. */
  "redirectUri": string,
  /** Debug Logs - Log API and auth details to Raycast development console */
  "debugLogs": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `devices` command */
  export type Devices = ExtensionPreferences & {}
  /** Preferences accessible in the `scenarios` command */
  export type Scenarios = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `devices` command */
  export type Devices = {}
  /** Arguments passed to the `scenarios` command */
  export type Scenarios = {}
}

