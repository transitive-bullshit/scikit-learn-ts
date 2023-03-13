# SequentialFeatureSelector

Transformer that performs Sequential Feature Selection.

This Sequential Feature Selector adds (forward selection) or removes (backward selection) features to form a feature subset in a greedy fashion. At each stage, this estimator chooses the best feature to add or remove based on the cross-validation score of an estimator. In the case of unsupervised learning, this Sequential Feature Selector looks only at the features (X), not the desired outputs (y).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SequentialFeatureSelector.html)

## Constructors

## constructor()

### Signature

```ts
new SequentialFeatureSelector(opts?: object): SequentialFeatureSelector;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.direction?` | `"forward"` \| `"backward"` | Whether to perform forward selection or backward selection.  `Default Value`  `'forward'` |
| `opts.estimator?` | `any` | An unfitted estimator. |
| `opts.n_features_to_select?` | `number` \| `"auto"` | If `"auto"`, the behaviour depends on the `tol` parameter:  `Default Value`  `'warn'` |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. When evaluating a new feature to add or remove, the cross-validation procedure is parallel over the folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.scoring?` | `string` | A single str (see The scoring parameter: defining model evaluation rules) or a callable (see Defining your scoring strategy from metric functions) to evaluate the predictions on the test set.  NOTE that when using a custom scorer, it should return a single value.  If `undefined`, the estimator’s score method is used. |
| `opts.tol?` | `number` | If the score is not incremented by at least `tol` between two consecutive feature additions or removals, stop adding or removing.  `tol` can be negative when removing features using `direction="backward"`. It can be useful to reduce the number of features at the cost of a small decrease in the score.  `tol` is enabled only when `n\_features\_to\_select` is `"auto"`. |

### Returns

[`SequentialFeatureSelector`](SequentialFeatureSelector.md)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SequentialFeatureSelector.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L473)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/SequentialFeatureSelector.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L446)

### n\_features\_to\_select\_

The number of features that were selected.

#### Signature

```ts
n_features_to_select_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/SequentialFeatureSelector.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L500)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:77](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L77)

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

Defined in: [generated/feature\_selection/SequentialFeatureSelector.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L81)

### support\_

The mask of selected features.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SequentialFeatureSelector.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L527)

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

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L140)

### fit()

Learn the features to select from X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.y?` | `ArrayLike` | Target values. This parameter may be ignored for unsupervised learning. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L157)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L201)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L253)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.indices?` | `boolean` | If `true`, the return value will be an array of integers, rather than a boolean mask.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L291)

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

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L90)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L330)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L370)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L408)
