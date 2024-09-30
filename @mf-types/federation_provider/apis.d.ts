
    export type RemoteKeys = 'federation_provider/components';
    type PackageType<T> = T extends 'federation_provider/components' ? typeof import('federation_provider/components') :any;