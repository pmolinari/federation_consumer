
    export type RemoteKeys = 'other_provider/components';
    type PackageType<T> = T extends 'other_provider/components' ? typeof import('other_provider/components') :any;