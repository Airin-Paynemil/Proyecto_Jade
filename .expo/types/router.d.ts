/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/categoria` | `/(tabs)/pantalla_Login` | `/(tabs)/pantalla_register` | `/(tabs)/two` | `/(tabs)/usuario` | `/_sitemap` | `/categoria` | `/modal` | `/pantalla_Login` | `/pantalla_register` | `/two` | `/usuario`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
