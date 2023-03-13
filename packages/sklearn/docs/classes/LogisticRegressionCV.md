# LogisticRegressionCV

Logistic Regression CV (aka logit, MaxEnt) classifier.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

This class implements logistic regression using liblinear, newton-cg, sag of lbfgs optimizer. The newton-cg, sag and lbfgs solvers support only L2 regularization with primal formulation. The liblinear solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. Elastic-Net penalty is only supported by the saga solver.

For the grid of `Cs` values and `l1\_ratios` values, the best hyperparameter is selected by the cross-validator [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold"), but it can be changed using the [cv](../../glossary.html#term-cv) parameter. The ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers can warm-start the coefficients (see [Glossary](../../glossary.html#term-warm_start)).

Read more in the [User Guide](../linear_model.html#logistic-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html)

## Constructors

## constructor()

### Signature

```ts
new LogisticRegressionCV(opts?: object): LogisticRegressionCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.Cs?` | `number` | Each of the values in Cs describes the inverse of regularization strength. If Cs is as an int, then a grid of Cs values are chosen in a logarithmic scale between 1e-4 and 1e4. Like in support vector machines, smaller values specify stronger regularization.  `Default Value`  `10` |
| `opts.class_weight?` | `any` | Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.  Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified. |
| `opts.cv?` | `number` | The default cross-validation generator used is Stratified K-Folds. If an integer is provided, then it is the number of folds used. See the module [`sklearn.model\_selection`](../classes.html#module-sklearn.model_selection "sklearn.model_selection") module for the list of possible cross-validation objects. |
| `opts.dual?` | `boolean` | Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=`false` when n\_samples > n\_features.  `Default Value`  `false` |
| `opts.fit_intercept?` | `boolean` | Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.  `Default Value`  `true` |
| `opts.intercept_scaling?` | `number` | Useful only when the solver ‘liblinear’ is used and self.fit\_intercept is set to `true`. In this case, x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equal to intercept\_scaling is appended to the instance vector. The intercept becomes `intercept\_scaling \* synthetic\_feature\_weight`.  Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.  `Default Value`  `1` |
| `opts.l1_ratios?` | `any` | The list of Elastic-Net mixing parameter, with `0 <= l1\_ratio <= 1`. Only used if `penalty='elasticnet'`. A value of 0 is equivalent to using `penalty='l2'`, while 1 is equivalent to using `penalty='l1'`. For `0 < l1\_ratio <1`, the penalty is a combination of L1 and L2. |
| `opts.max_iter?` | `number` | Maximum number of iterations of the optimization algorithm.  `Default Value`  `100` |
| `opts.multi_class?` | `"ovr"` \| `"multinomial"` | If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’.  `Default Value`  `'auto'` |
| `opts.n_jobs?` | `number` | Number of CPU cores used during the cross-validation loop. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.penalty?` | `"l1"` \| `"l2"` \| `"elasticnet"` | Specify the norm of the penalty:  `Default Value`  `'l2'` |
| `opts.random_state?` | `number` | Used when `solver='sag'`, ‘saga’ or ‘liblinear’ to shuffle the data. Note that this only applies to the solver and not the cross-validation generator. See [Glossary](../../glossary.html#term-random_state) for details. |
| `opts.refit?` | `boolean` | If set to `true`, the scores are averaged across all folds, and the coefs and the C that corresponds to the best score is taken, and a final refit is done using these parameters. Otherwise the coefs, intercepts and C that correspond to the best scores across folds are averaged.  `Default Value`  `true` |
| `opts.scoring?` | `string` | A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. For a list of scoring functions that can be used, look at [`sklearn.metrics`](../classes.html#module-sklearn.metrics "sklearn.metrics"). The default scoring option used is ‘accuracy’. |
| `opts.solver?` | `"lbfgs"` \| `"newton-cholesky"` \| `"liblinear"` \| `"newton-cg"` \| `"sag"` \| `"saga"` | Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects:  `Default Value`  `'lbfgs'` |
| `opts.tol?` | `number` | Tolerance for stopping criteria.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | For the ‘liblinear’, ‘sag’ and ‘lbfgs’ solvers set verbose to any positive number for verbosity.  `Default Value`  `0` |

### Returns

[`LogisticRegressionCV`](LogisticRegressionCV.md)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L23)

## Accessors

### C\_

Array of C that maps to the best scores across every class. If refit is set to `false`, then for each class, the best C is the average of the C’s that correspond to the best scores for each fold. `C\_` is of shape(n\_classes,) when the problem is binary.

#### Signature

```ts
C_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L754)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L754)

### Cs\_

Array of C i.e. inverse of regularization parameter values used for cross-validation.

#### Signature

```ts
Cs_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L646)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L646)

### classes\_

A list of class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L561)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L561)

### coef\_

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L590)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L590)

### coefs\_paths\_

dict with classes as the keys, and the path of coefficients obtained during cross-validating across each fold and then across each Cs after doing an OvR for the corresponding class as values. If the ‘multi\_class’ option is set to ‘multinomial’, then the coefs\_paths are the coefficients corresponding to each class. Each dict value has shape `(n\_folds, n\_cs, n\_features)` or `(n\_folds, n\_cs, n\_features + 1)` depending on whether the intercept is fit or not. If `penalty='elasticnet'`, the shape is `(n\_folds, n\_cs, n\_l1\_ratios\_, n\_features)` or `(n\_folds, n\_cs, n\_l1\_ratios\_, n\_features + 1)`.

#### Signature

```ts
coefs_paths_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:700](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L700)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:700](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L700)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:862](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L862)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:862](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L862)

### intercept\_

Intercept (a.k.a. bias) added to the decision function.

If `fit\_intercept` is set to `false`, the intercept is set to zero. `intercept\_` is of shape(1,) when the problem is binary.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L619)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L619)

### l1\_ratio\_

Array of l1\_ratio that maps to the best scores across every class. If refit is set to `false`, then for each class, the best l1\_ratio is the average of the l1\_ratio’s that correspond to the best scores for each fold. `l1\_ratio\_` is of shape(n\_classes,) when the problem is binary.

#### Signature

```ts
l1_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L781)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L781)

### l1\_ratios\_

Array of l1\_ratios used for cross-validation. If no l1\_ratio is used (i.e. penalty is not ‘elasticnet’), this is set to `\[`undefined`\]`

#### Signature

```ts
l1_ratios_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L673)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L673)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L835)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L835)

### n\_iter\_

Actual number of iterations for all classes, folds and Cs. In the binary or multinomial cases, the first dimension is equal to 1. If `penalty='elasticnet'`, the shape is `(n\_classes, n\_folds, n\_cs, n\_l1\_ratios)` or `(1, n\_folds, n\_cs, n\_l1\_ratios)`.

#### Signature

```ts
n_iter_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:808](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L808)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:808](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L808)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L153)

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

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L157)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L153) [generated/linear\_model/LogisticRegressionCV.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L157)

### scores\_

dict with classes as the keys, and the values as the grid of scores obtained during cross-validating each fold, after doing an OvR for the corresponding class. If the ‘multi\_class’ option given is ‘multinomial’ then the same scores are repeated across all classes, since this is the multinomial class. Each dict value has shape `(n\_folds, n\_cs)` or `(n\_folds, n\_cs, n\_l1\_ratios)` if `penalty='elasticnet'`.

#### Signature

```ts
scores_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L727)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L727)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the confidence scores. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L247)

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

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L287)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L228)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `any` | Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target vector relative to X. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L315)

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

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L166)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the predictions. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L364)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Vector to be scored, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L401)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Vector to be scored, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L443)

### score()

Score using the `scoring` option on the given test data and labels.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L480)

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

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L533)
