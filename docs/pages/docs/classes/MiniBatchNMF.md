# MiniBatchNMF

Mini-Batch Non-Negative Matrix Factorization (NMF).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchNMF(opts?: MiniBatchNMFOptions): MiniBatchNMF;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MiniBatchNMFOptions` |

### Returns

[`MiniBatchNMF`](MiniBatchNMF.md)

Defined in:  [generated/decomposition/MiniBatchNMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L17)

### id

> `string`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L14)

### opts

> `any`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L15)

## Accessors

### components\_

Factorization matrix, sometimes called ‘dictionary’.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L347)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L493)

### n\_components\_

The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L372)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L468)

### n\_iter\_

Actual number of started iterations over the whole dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L422)

### n\_steps\_

Number of mini-batches processed.

#### Signature

```ts
n_steps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L445)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L26)

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

Defined in: [generated/decomposition/MiniBatchNMF.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L30)

### reconstruction\_err\_

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

#### Signature

```ts
reconstruction_err_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchNMF.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L397)

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

Defined in:  [generated/decomposition/MiniBatchNMF.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L99)

### fit()

Learn a NMF model for the data X.

#### Signature

```ts
fit(opts: MiniBatchNMFFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L116)

### fit\_transform()

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Signature

```ts
fit_transform(opts: MiniBatchNMFFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L148)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: MiniBatchNMFGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L186)

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

Defined in:  [generated/decomposition/MiniBatchNMF.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L39)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: MiniBatchNMFInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L219)

### partial\_fit()

Update the model using the data in `X` as a mini-batch.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once (see Strategies to scale computationally: bigger data).

#### Signature

```ts
partial_fit(opts: MiniBatchNMFPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L255)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: MiniBatchNMFSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L291)

### transform()

Transform the data X according to the fitted MiniBatchNMF model.

#### Signature

```ts
transform(opts: MiniBatchNMFTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MiniBatchNMFTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/MiniBatchNMF.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L319)
