# Class: LogisticRegressionCV

Logistic Regression CV (aka logit, MaxEnt) classifier.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

This class implements logistic regression using liblinear, newton-cg, sag or lbfgs optimizer. The newton-cg, sag and lbfgs solvers support only L2 regularization with primal formulation. The liblinear solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. Elastic-Net penalty is only supported by the saga solver.

For the grid of `Cs` values and `l1_ratios` values, the best hyperparameter is selected by the cross-validator [`StratifiedKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold"), but it can be changed using the [cv](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cv) parameter. The ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers can warm-start the coefficients (see [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start)).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#logistic-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html)

## Constructors

### new LogisticRegressionCV()

> **new LogisticRegressionCV**(`opts`?): [`LogisticRegressionCV`](LogisticRegressionCV.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.class_weight`? | `any` | Weights associated with classes in the form `{class_label: weight}`. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n_samples / (n_classes \* np.bincount(y))`. Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified. |
| `opts.Cs`? | `number` | Each of the values in Cs describes the inverse of regularization strength. If Cs is as an int, then a grid of Cs values are chosen in a logarithmic scale between 1e-4 and 1e4. Like in support vector machines, smaller values specify stronger regularization. |
| `opts.cv`? | `number` | The default cross-validation generator used is Stratified K-Folds. If an integer is provided, then it is the number of folds used. See the module [`sklearn.model_selection`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.model_selection.html#module-sklearn.model_selection "sklearn.model_selection") module for the list of possible cross-validation objects. |
| `opts.dual`? | `boolean` | Dual (constrained) or primal (regularized, see also [this equation](https://scikit-learn.org/stable/modules/generated/../linear_model.html#regularized-logistic-loss)) formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=`false` when n_samples > n_features. |
| `opts.fit_intercept`? | `boolean` | Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function. |
| `opts.intercept_scaling`? | `number` | Useful only when the solver ‘liblinear’ is used and self.fit_intercept is set to `true`. In this case, x becomes \[x, self.intercept_scaling\], i.e. a “synthetic” feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes `intercept_scaling \* synthetic_feature_weight`. Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased. |
| `opts.l1_ratios`? | `any` | The list of Elastic-Net mixing parameter, with `0 <= l1_ratio <= 1`. Only used if `penalty='elasticnet'`. A value of 0 is equivalent to using `penalty='l2'`, while 1 is equivalent to using `penalty='l1'`. For `0 < l1_ratio <1`, the penalty is a combination of L1 and L2. |
| `opts.max_iter`? | `number` | Maximum number of iterations of the optimization algorithm. |
| `opts.multi_class`? | `"ovr"` \| `"multinomial"` | If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’. |
| `opts.n_jobs`? | `number` | Number of CPU cores used during the cross-validation loop. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.penalty`? | `"l1"` \| `"l2"` \| `"elasticnet"` | Specify the norm of the penalty: |
| `opts.random_state`? | `number` | Used when `solver='sag'`, ‘saga’ or ‘liblinear’ to shuffle the data. Note that this only applies to the solver and not the cross-validation generator. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details. |
| `opts.refit`? | `boolean` | If set to `true`, the scores are averaged across all folds, and the coefs and the C that corresponds to the best score is taken, and a final refit is done using these parameters. Otherwise the coefs, intercepts and C that correspond to the best scores across folds are averaged. |
| `opts.scoring`? | `string` | A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. For a list of scoring functions that can be used, look at [`sklearn.metrics`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.metrics.html#module-sklearn.metrics "sklearn.metrics"). The default scoring option used is ‘accuracy’. |
| `opts.solver`? | `"lbfgs"` \| `"newton-cholesky"` \| `"liblinear"` \| `"newton-cg"` \| `"sag"` \| `"saga"` | Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects: |
| `opts.tol`? | `number` | Tolerance for stopping criteria. |
| `opts.verbose`? | `number` | For the ‘liblinear’, ‘sag’ and ‘lbfgs’ solvers set verbose to any positive number for verbosity. |

**Returns** [`LogisticRegressionCV`](LogisticRegressionCV.md)

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/linear\_model/LogisticRegressionCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/linear\_model/LogisticRegressionCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/linear\_model/LogisticRegressionCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L25) |
| `id` | `string` | `undefined` | [generated/linear\_model/LogisticRegressionCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L22) |
| `opts` | `any` | `undefined` | [generated/linear\_model/LogisticRegressionCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L23) |

## Accessors

### C\_

**Get Signature**

> **get** **C\_**(): `Promise`\<`ArrayLike`\>

Array of C that maps to the best scores across every class. If refit is set to `false`, then for each class, the best C is the average of the C’s that correspond to the best scores for each fold. `C_` is of shape(n_classes,) when the problem is binary.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:847](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L847)

***

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

A list of class labels known to the classifier.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L654)

***

### coef\_

**Get Signature**

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

Coefficient of the features in the decision function.

`coef_` is of shape (1, n_features) when the given problem is binary.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L683)

***

### coefs\_paths\_

**Get Signature**

> **get** **coefs\_paths\_**(): `Promise`\<`ArrayLike`[][]\>

dict with classes as the keys, and the path of coefficients obtained during cross-validating across each fold and then across each Cs after doing an OvR for the corresponding class as values. If the ‘multi_class’ option is set to ‘multinomial’, then the coefs_paths are the coefficients corresponding to each class. Each dict value has shape `(n_folds, n_cs, n_features)` or `(n_folds, n_cs, n_features + 1)` depending on whether the intercept is fit or not. If `penalty='elasticnet'`, the shape is `(n_folds, n_cs, n_l1_ratios_, n_features)` or `(n_folds, n_cs, n_l1_ratios_, n_features + 1)`.

**Returns** `Promise`\<`ArrayLike`[][]\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L793)

***

### Cs\_

**Get Signature**

> **get** **Cs\_**(): `Promise`\<`ArrayLike`\>

Array of C i.e. inverse of regularization parameter values used for cross-validation.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L739)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:955](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L955)

***

### intercept\_

**Get Signature**

> **get** **intercept\_**(): `Promise`\<`ArrayLike`\>

Intercept (a.k.a. bias) added to the decision function.

If `fit_intercept` is set to `false`, the intercept is set to zero. `intercept_` is of shape(1,) when the problem is binary.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L712)

***

### l1\_ratio\_

**Get Signature**

> **get** **l1\_ratio\_**(): `Promise`\<`ArrayLike`\>

Array of l1_ratio that maps to the best scores across every class. If refit is set to `false`, then for each class, the best l1_ratio is the average of the l1_ratio’s that correspond to the best scores for each fold. `l1_ratio_` is of shape(n_classes,) when the problem is binary.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:874](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L874)

***

### l1\_ratios\_

**Get Signature**

> **get** **l1\_ratios\_**(): `Promise`\<`ArrayLike`\>

Array of l1_ratios used for cross-validation. If no l1_ratio is used (i.e. penalty is not ‘elasticnet’), this is set to `\[`undefined`\]`

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L766)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:928](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L928)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`ArrayLike`[][]\>

Actual number of iterations for all classes, folds and Cs. In the binary or multinomial cases, the first dimension is equal to 1. If `penalty='elasticnet'`, the shape is `(n_classes, n_folds, n_cs, n_l1_ratios)` or `(1, n_folds, n_cs, n_l1_ratios)`.

**Returns** `Promise`\<`ArrayLike`[][]\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:901](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L901)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L153)

***

### scores\_

**Get Signature**

> **get** **scores\_**(): `Promise`\<`any`\>

dict with classes as the keys, and the values as the grid of scores obtained during cross-validating each fold, after doing an OvR for the corresponding class. If the ‘multi_class’ option given is ‘multinomial’ then the same scores are repeated across all classes, since this is the multinomial class. Each dict value has shape `(n_folds, n_cs)` or `(n_folds, n_cs, n_l1_ratios)` if `penalty='elasticnet'`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L820)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The data matrix for which we want to get the confidence scores. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L228)

***

### densify()

> **densify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef_` member (back) to a numpy.ndarray. This is the default format of `coef_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L266)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L209)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model according to the given training data.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters to pass to the underlying splitter and scorer. |
| `opts.sample_weight`? | `any` | Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight. |
| `opts.X`? | `ArrayLike` | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `ArrayLike` | Target vector relative to X. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L294)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L345)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L166)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class labels for samples in X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The data matrix for which we want to get the predictions. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L381)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict logarithm of probability estimates.

The returned estimates for all classes are ordered by the label of classes.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Vector to be scored, where `n_samples` is the number of samples and `n_features` is the number of features. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L417)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Probability estimates.

The returned estimates for all classes are ordered by the label of classes.

For a multi_class problem, if multi_class is set to be “multinomial” the softmax function is used to find the predicted probability of each class. Else use a one-vs-rest approach, i.e. calculate the probability of each class assuming it to be positive using the logistic function and normalize these values across all the classes.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Vector to be scored, where `n_samples` is the number of samples and `n_features` is the number of features. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L457)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Score using the `scoring` option on the given test data and labels.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.score_params`? | `any` | Parameters to pass to the `score` method of the underlying scorer. |
| `opts.X`? | `ArrayLike`[] | Test samples. |
| `opts.y`? | `ArrayLike` | True labels for X. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L493)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L546)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L586)

***

### sparsify()

> **sparsify**(`opts`): `Promise`\<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept_` member is not converted.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/LogisticRegressionCV.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L626)
