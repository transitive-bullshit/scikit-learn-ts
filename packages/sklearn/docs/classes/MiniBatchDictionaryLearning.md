# MiniBatchDictionaryLearning

Mini-batch dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchDictionaryLearning.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchDictionaryLearning(opts?: MiniBatchDictionaryLearningOptions): MiniBatchDictionaryLearning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchDictionaryLearningOptions`](../interfaces/MiniBatchDictionaryLearningOptions.md) |

### Returns

[`MiniBatchDictionaryLearning`](MiniBatchDictionaryLearning.md)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L19)

## Accessors

### components\_

Components extracted from the data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L353)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L353)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L434)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L434)

### inner\_stats\_

Internal sufficient statistics that are kept by the algorithm. Keeping them is useful in online settings, to avoid losing the history of the evolution, but they shouldn’t have any use for the end user. `A` `(n\_components, n\_components)` is the dictionary covariance matrix. `B` `(n\_features, n\_components)` is the data approximation matrix.

#### Signature

```ts
inner_stats_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L380)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L380)

### iter\_offset\_

The number of iteration on data batches that has been performed before.

#### Signature

```ts
iter_offset_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L488)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L488)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L407)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L407)

### n\_iter\_

Number of iterations over the full dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L461)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L461)

### n\_steps\_

Number of mini-batches processed.

#### Signature

```ts
n_steps_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L542)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L542)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L30)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L34)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L30) [generated/decomposition/MiniBatchDictionaryLearning.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L34)

### random\_state\_

RandomState instance that is generated either from a seed, the random number generattor or by `np.random`.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L515)

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L515)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L115)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: MiniBatchDictionaryLearningFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningFitOptions`](../interfaces/MiniBatchDictionaryLearningFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L132)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: MiniBatchDictionaryLearningFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningFitTransformOptions`](../interfaces/MiniBatchDictionaryLearningFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L166)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: MiniBatchDictionaryLearningGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningGetFeatureNamesOutOptions`](../interfaces/MiniBatchDictionaryLearningGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L207)

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

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L43)

### partial\_fit()

Update the model using the data in X as a mini-batch.

#### Signature

```ts
partial_fit(opts: MiniBatchDictionaryLearningPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningPartialFitOptions`](../interfaces/MiniBatchDictionaryLearningPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L242)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: MiniBatchDictionaryLearningSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningSetOutputOptions`](../interfaces/MiniBatchDictionaryLearningSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L281)

### transform()

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Signature

```ts
transform(opts: MiniBatchDictionaryLearningTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchDictionaryLearningTransformOptions`](../interfaces/MiniBatchDictionaryLearningTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L318)
