# KDTree

KDTree for fast generalized N-point problems

Read more in the [User Guide](../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html)

## Constructors

## constructor()

### Signature

```ts
new KDTree(opts?: KDTreeOptions): KDTree;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KDTreeOptions`](../interfaces/KDTreeOptions.md) |

### Returns

[`KDTree`](KDTree.md)

Defined in:  [generated/neighbors/KDTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KDTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KDTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KDTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/KDTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/KDTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L17)

## Accessors

### data

The training data

#### Signature

```ts
data(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/KDTree.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L337)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KDTree.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L28)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/neighbors/KDTree.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L32)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/KDTree.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L82)

### get\_arrays()

Get data and node arrays.

#### Signature

```ts
get_arrays(opts: KDTreeGetArraysOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeGetArraysOptions`](../interfaces/KDTreeGetArraysOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L99)

### get\_n\_calls()

Get number of calls.

#### Signature

```ts
get_n_calls(opts: KDTreeGetNCallsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeGetNCallsOptions`](../interfaces/KDTreeGetNCallsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L125)

### get\_tree\_stats()

Get tree status.

#### Signature

```ts
get_tree_stats(opts: KDTreeGetTreeStatsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeGetTreeStatsOptions`](../interfaces/KDTreeGetTreeStatsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L151)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neighbors/KDTree.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L41)

### kernel\_density()

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

#### Signature

```ts
kernel_density(opts: KDTreeKernelDensityOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeKernelDensityOptions`](../interfaces/KDTreeKernelDensityOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L177)

### query()

query the tree for the k nearest neighbors

#### Signature

```ts
query(opts: KDTreeQueryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeQueryOptions`](../interfaces/KDTreeQueryOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L211)

### query\_radius()

query the tree for neighbors within a radius r

#### Signature

```ts
query_radius(opts: KDTreeQueryRadiusOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeQueryRadiusOptions`](../interfaces/KDTreeQueryRadiusOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L245)

### reset\_n\_calls()

Reset number of calls to 0.

#### Signature

```ts
reset_n_calls(opts: KDTreeResetNCallsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeResetNCallsOptions`](../interfaces/KDTreeResetNCallsOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L279)

### two\_point\_correlation()

Compute the two-point correlation function

#### Signature

```ts
two_point_correlation(opts: KDTreeTwoPointCorrelationOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeTwoPointCorrelationOptions`](../interfaces/KDTreeTwoPointCorrelationOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/KDTree.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KDTree.ts#L305)
