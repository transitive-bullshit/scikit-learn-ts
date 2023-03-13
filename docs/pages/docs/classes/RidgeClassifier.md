# RidgeClassifier

Classifier using Ridge regression.

This classifier first converts the target values into `{-1, 1}` and then treats the problem as a regression task (multi-output regression in the multiclass case).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new RidgeClassifier(opts?: object): RidgeClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").  `Default Value`  `1` |
| `opts.class_weight?` | `any` | Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. |
| `opts.copy_X?` | `boolean` | If `true`, X will be copied; else, it may be overwritten.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).  `Default Value`  `true` |
| `opts.max_iter?` | `number` | Maximum number of iterations for conjugate gradient solver. The default value is determined by scipy.sparse.linalg. |
| `opts.positive?` | `boolean` | When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See Glossary for details. |
| `opts.solver?` | `"auto"` \| `"svd"` \| `"lsqr"` \| `"lbfgs"` \| `"sag"` \| `"saga"` \| `"cholesky"` \| `"sparse_cg"` | Solver to use in the computational routines:  `Default Value`  `'auto'` |
| `opts.tol?` | `number` | Precision of the solution. Note that `tol` has no effect for solvers ‘svd’ and ‘cholesky’.  `Default Value`  `0.0001` |

### Returns

[`RidgeClassifier`](RidgeClassifier.md)

Defined in:  [generated/linear\_model/RidgeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L25)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data matrix for which we want to get the confidence scores. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L177)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L158)

### fit()

Fit Ridge classifier model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. |
| `opts.sample_weight?` | `number` \| `ArrayLike` | Individual weights for each sample. If given a float, every sample will have the same weight. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L212)

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

Defined in:  [generated/linear\_model/RidgeClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L110)

### predict()

Predict class labels for samples in `X`.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The data matrix for which we want to predict the targets. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L259)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/RidgeClassifier.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L294)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L19)

## Accessors

### coef\_

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/RidgeClassifier.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L343)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/RidgeClassifier.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L441)

### intercept\_

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/linear\_model/RidgeClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L366)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/RidgeClassifier.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L416)

### n\_iter\_

Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.

#### Signature

```ts
n_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/RidgeClassifier.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L391)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L97)

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

Defined in: [generated/linear\_model/RidgeClassifier.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L101)
