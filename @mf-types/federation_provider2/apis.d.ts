
    export type RemoteKeys = 'federation_provider2/components';
    type PackageType<T> = T extends 'federation_provider2/components' ? typeof import('federation_provider2/components') :any;