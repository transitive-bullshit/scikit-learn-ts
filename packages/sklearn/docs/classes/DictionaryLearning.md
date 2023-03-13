# DictionaryLearning

Dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.DictionaryLearning.html)

## Constructors

## constructor()

### Signature

```ts
new DictionaryLearning(opts?: DictionaryLearningOptions): DictionaryLearning;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DictionaryLearningOptions`](../interfaces/DictionaryLearningOptions.md) |

### Returns

[`DictionaryLearning`](DictionaryLearning.md)

Defined in:  [generated/decomposition/DictionaryLearning.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/DictionaryLearning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/DictionaryLearning.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/DictionaryLearning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/DictionaryLearning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/DictionaryLearning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L19)

## Accessors

### components\_

dictionary atoms extracted from the data

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L301)

Defined in:  [generated/decomposition/DictionaryLearning.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L301)

### error\_

vector of errors at each iteration

#### Signature

```ts
error_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L328)

Defined in:  [generated/decomposition/DictionaryLearning.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L328)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L382)

Defined in:  [generated/decomposition/DictionaryLearning.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L382)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L355)

Defined in:  [generated/decomposition/DictionaryLearning.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L355)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L409)

Defined in:  [generated/decomposition/DictionaryLearning.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L409)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/DictionaryLearning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L30)

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

Defined in:  [generated/decomposition/DictionaryLearning.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L34)

Defined in:  [generated/decomposition/DictionaryLearning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L30) [generated/decomposition/DictionaryLearning.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L34)

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

Defined in:  [generated/decomposition/DictionaryLearning.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L111)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: DictionaryLearningFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningFitOptions`](../interfaces/DictionaryLearningFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L128)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: DictionaryLearningFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningFitTransformOptions`](../interfaces/DictionaryLearningFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L160)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: DictionaryLearningGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningGetFeatureNamesOutOptions`](../interfaces/DictionaryLearningGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L200)

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

Defined in:  [generated/decomposition/DictionaryLearning.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: DictionaryLearningSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningSetOutputOptions`](../interfaces/DictionaryLearningSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L237)

### transform()

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Signature

```ts
transform(opts: DictionaryLearningTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DictionaryLearningTransformOptions`](../interfaces/DictionaryLearningTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/DictionaryLearning.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L269)
