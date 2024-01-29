import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ToolBox.web.ts
// and on native platforms to ToolBox.ts
import ToolBoxModule from './ToolBoxModule';
import { ChangeEventPayload } from './ToolBox.types';

export * from './Firebase/Auth'
export * from './Firebase/Crashlytics'
export * from './AsyncStorage'
export * from './Camera'
export * from './DeviceAuth'
export * from './Encrypt'
export * from './LocalAuthenticator'
export * from './Location'

// Get the native constant value.
export const PI = ToolBoxModule.PI;

export function hello(): string {
  return ToolBoxModule.hello();
}

export async function setValueAsync(value: string) {
  return await ToolBoxModule.setValueAsync(value);
}

const emitter = new EventEmitter(ToolBoxModule ?? NativeModulesProxy.ToolBox);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ChangeEventPayload };
