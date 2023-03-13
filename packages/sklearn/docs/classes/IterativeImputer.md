# IterativeImputer

Multivariate imputer that estimates each feature from all the others.

A strategy for imputing missing values by modeling each feature with missing values as a function of other features in a round-robin fashion.

Read more in the [User Guide](../impute.html#iterative-imputer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html)

## Constructors

## constructor()

### Signature

```ts
new IterativeImputer(opts?: IterativeImputerOptions): IterativeImputer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IterativeImputerOptions`](../interfaces/IterativeImputerOptions.md) |

### Returns

[`IterativeImputer`](IterativeImputer.md)

Defined in:  [generated/impute/IterativeImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/impute/IterativeImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/impute/IterativeImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/impute/IterativeImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L21)

### id

> `string`

Defined in:  [generated/impute/IterativeImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L18)

### opts

> `any`

Defined in:  [generated/impute/IterativeImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/impute/IterativeImputer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L397)

Defined in:  [generated/impute/IterativeImputer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L397)

### imputation\_sequence\_

Each tuple has `(feat\_idx, neighbor\_feat\_idx, estimator)`, where `feat\_idx` is the current feature to be imputed, `neighbor\_feat\_idx` is the array of other features used to impute the current feature, and `estimator` is the trained estimator used for the imputation. Length is `self.n\_features\_with\_missing\_ \* self.n\_iter\_`.

#### Signature

```ts
imputation_sequence_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L316)

Defined in:  [generated/impute/IterativeImputer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L316)

### indicator\_

Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.

#### Signature

```ts
indicator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L451)

Defined in:  [generated/impute/IterativeImputer.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L451)

### initial\_imputer\_

Imputer used to initialize the missing values.

#### Signature

```ts
initial_imputer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L289)

Defined in:  [generated/impute/IterativeImputer.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L289)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/impute/IterativeImputer.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L370)

Defined in:  [generated/impute/IterativeImputer.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L370)

### n\_features\_with\_missing\_

Number of features with missing values.

#### Signature

```ts
n_features_with_missing_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/impute/IterativeImputer.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L424)

Defined in:  [generated/impute/IterativeImputer.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L424)

### n\_iter\_

Number of iteration rounds that occurred. Will be less than `self.max\_iter` if early stopping criterion was reached.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/impute/IterativeImputer.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L343)

Defined in:  [generated/impute/IterativeImputer.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L343)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/impute/IterativeImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L30)

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

Defined in:  [generated/impute/IterativeImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L34)

Defined in:  [generated/impute/IterativeImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L30) [generated/impute/IterativeImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L34)

### random\_state\_

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L478)

Defined in:  [generated/impute/IterativeImputer.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L478)

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

Defined in:  [generated/impute/IterativeImputer.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L109)

### fit()

Fit the imputer on `X` and return self.

#### Signature

```ts
fit(opts: IterativeImputerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerFitOptions`](../interfaces/IterativeImputerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L126)

### fit\_transform()

Fit the imputer on `X` and return the transformed `X`.

#### Signature

```ts
fit_transform(opts: IterativeImputerFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerFitTransformOptions`](../interfaces/IterativeImputerFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/impute/IterativeImputer.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L156)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: IterativeImputerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerGetFeatureNamesOutOptions`](../interfaces/IterativeImputerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L190)

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

Defined in:  [generated/impute/IterativeImputer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L43)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: IterativeImputerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerSetOutputOptions`](../interfaces/IterativeImputerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L227)

### transform()

Impute all missing values in `X`.

Note that this is stochastic, and that if `random\_state` is not fixed, repeated calls, or permuted input, results will differ.

#### Signature

```ts
transform(opts: IterativeImputerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerTransformOptions`](../interfaces/IterativeImputerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/impute/IterativeImputer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/impute/IterativeImputer.ts#L259)
