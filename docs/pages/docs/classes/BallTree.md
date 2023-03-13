# BallTree

BallTree for fast generalized N-point problems

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html)

## Constructors

## constructor()

### Signature

```ts
new BallTree(opts?: BallTreeOptions): BallTree;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `BallTreeOptions` |

### Returns

[`BallTree`](BallTree.md)

Defined in:  [generated/neighbors/BallTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/BallTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/BallTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/BallTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/BallTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/BallTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L17)

## Accessors

### data

The training data

#### Signature

```ts
data(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/BallTree.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L339)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/BallTree.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L28)

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

Defined in: [generated/neighbors/BallTree.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L32)

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

Defined in:  [generated/neighbors/BallTree.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L82)

### get\_arrays()

Get data and node arrays.

#### Signature

```ts
get_arrays(opts: BallTreeGetArraysOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeGetArraysOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L99)

### get\_n\_calls()

Get number of calls.

#### Signature

```ts
get_n_calls(opts: BallTreeGetNCallsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeGetNCallsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L125)

### get\_tree\_stats()

Get tree status.

#### Signature

```ts
get_tree_stats(opts: BallTreeGetTreeStatsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeGetTreeStatsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L151)

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

Defined in:  [generated/neighbors/BallTree.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L41)

### kernel\_density()

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

#### Signature

```ts
kernel_density(opts: BallTreeKernelDensityOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeKernelDensityOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L177)

### query()

query the tree for the k nearest neighbors

#### Signature

```ts
query(opts: BallTreeQueryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeQueryOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L211)

### query\_radius()

query the tree for neighbors within a radius r

#### Signature

```ts
query_radius(opts: BallTreeQueryRadiusOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeQueryRadiusOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L245)

### reset\_n\_calls()

Reset number of calls to 0.

#### Signature

```ts
reset_n_calls(opts: BallTreeResetNCallsOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeResetNCallsOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/BallTree.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L279)

### two\_point\_correlation()

Compute the two-point correlation function

#### Signature

```ts
two_point_correlation(opts: BallTreeTwoPointCorrelationOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BallTreeTwoPointCorrelationOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neighbors/BallTree.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L305)