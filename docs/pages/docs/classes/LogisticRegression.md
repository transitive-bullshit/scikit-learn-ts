# LogisticRegression

Logistic Regression (aka logit, MaxEnt) classifier.

In the multiclass case, the training algorithm uses the one-vs-rest (OvR) scheme if the ‘multi\_class’ option is set to ‘ovr’, and uses the cross-entropy loss if the ‘multi\_class’ option is set to ‘multinomial’. (Currently the ‘multinomial’ option is supported only by the ‘lbfgs’, ‘sag’, ‘saga’ and ‘newton-cg’ solvers.)

This class implements regularized logistic regression using the ‘liblinear’ library, ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers. **Note that regularization is applied by default**. It can handle both dense and sparse input. Use C-ordered arrays or CSR matrices containing 64-bit floats for optimal performance; any other input format will be converted (and copied).

The ‘newton-cg’, ‘sag’, and ‘lbfgs’ solvers support only L2 regularization with primal formulation, or no regularization. The ‘liblinear’ solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. The Elastic-Net regularization is only supported by the ‘saga’ solver.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html)

## Constructors

## constructor()

### Signature

```ts
new LogisticRegression(opts?: object): LogisticRegression;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.C?` | `number` | Inverse of regularization strength; must be a positive float. Like in support vector machines, smaller values specify stronger regularization.  `Default Value`  `1` |
| `opts.class_weight?` | `any` | Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.  Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified. |
| `opts.dual?` | `boolean` | Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=`false` when n\_samples > n\_features.  `Default Value`  `false` |
| `opts.fit_intercept?` | `boolean` | Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.  `Default Value`  `true` |
| `opts.intercept_scaling?` | `number` | Useful only when the solver ‘liblinear’ is used and self.fit\_intercept is set to `true`. In this case, x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equal to intercept\_scaling is appended to the instance vector. The intercept becomes `intercept\_scaling \* synthetic\_feature\_weight`.  Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.  `Default Value`  `1` |
| `opts.l1_ratio?` | `number` | The Elastic-Net mixing parameter, with `0 <= l1\_ratio <= 1`. Only used if `penalty='elasticnet'`. Setting `l1\_ratio=0` is equivalent to using `penalty='l2'`, while setting `l1\_ratio=1` is equivalent to using `penalty='l1'`. For `0 < l1\_ratio <1`, the penalty is a combination of L1 and L2. |
| `opts.max_iter?` | `number` | Maximum number of iterations taken for the solvers to converge.  `Default Value`  `100` |
| `opts.multi_class?` | `"auto"` \| `"ovr"` \| `"multinomial"` | If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’.  `Default Value`  `'auto'` |
| `opts.n_jobs?` | `number` | Number of CPU cores used when parallelizing over classes if multi\_class=’ovr’”. This parameter is ignored when the `solver` is set to ‘liblinear’ regardless of whether ‘multi\_class’ is specified or not. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.penalty?` | `"l1"` \| `"l2"` \| `"elasticnet"` | Specify the norm of the penalty:  `Default Value`  `'l2'` |
| `opts.random_state?` | `number` | Used when `solver` == ‘sag’, ‘saga’ or ‘liblinear’ to shuffle the data. See Glossary for details. |
| `opts.solver?` | `"lbfgs"` \| `"newton-cholesky"` \| `"liblinear"` \| `"newton-cg"` \| `"sag"` \| `"saga"` | Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects:  `Default Value`  `'lbfgs'` |
| `opts.tol?` | `number` | Tolerance for stopping criteria.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | For the liblinear and lbfgs solvers set verbose to any positive number for verbosity.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. Useless for liblinear solver. See the Glossary.  `Default Value`  `false` |

### Returns

[`LogisticRegression`](LogisticRegression.md)

Defined in:  [generated/linear\_model/LogisticRegression.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L29)

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

Defined in:  [generated/linear\_model/LogisticRegression.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L235)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L275)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L216)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `any` | Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight. |
| `opts.y?` | `ArrayLike` | Target vector relative to X. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L303)

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

Defined in:  [generated/linear\_model/LogisticRegression.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L156)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data matrix for which we want to get the predictions. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L352)

### predict\_log\_proba()

Predict logarithm of probability estimates.

The returned estimates for all classes are ordered by the label of classes.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Vector to be scored, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L389)

### predict\_proba()

Probability estimates.

The returned estimates for all classes are ordered by the label of classes.

For a multi\_class problem, if multi\_class is set to be “multinomial” the softmax function is used to find the predicted probability of each class. Else use a one-vs-rest approach, i.e calculate the probability of each class assuming it to be positive using the logistic function. and normalize these values across all the classes.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Vector to be scored, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L431)

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

Defined in:  [generated/linear\_model/LogisticRegression.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L470)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegression.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L523)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LogisticRegression.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LogisticRegression.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LogisticRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/LogisticRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/LogisticRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L23)

## Accessors

### classes\_

A list of class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LogisticRegression.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L551)

### coef\_

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary. In particular, when `multi\_class='multinomial'`, `coef\_` corresponds to outcome 1 (`true`) and `\-coef\_` corresponds to outcome 0 (`false`).

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/LogisticRegression.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L580)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LogisticRegression.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L663)

### intercept\_

Intercept (a.k.a. bias) added to the decision function.

If `fit\_intercept` is set to `false`, the intercept is set to zero. `intercept\_` is of shape (1,) when the given problem is binary. In particular, when `multi\_class='multinomial'`, `intercept\_` corresponds to outcome 1 (`true`) and `\-intercept\_` corresponds to outcome 0 (`false`).

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LogisticRegression.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L609)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/LogisticRegression.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L636)

### n\_iter\_

Actual number of iterations for all classes. If binary or multinomial, it returns only 1 element. For liblinear solver, only the maximum number of iteration across all classes is given.

#### Signature

```ts
n_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/LogisticRegression.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L690)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LogisticRegression.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L143)

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

Defined in: [generated/linear\_model/LogisticRegression.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L147)
