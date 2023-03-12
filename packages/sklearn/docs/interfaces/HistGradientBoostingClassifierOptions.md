[sklearn](../readme.md) / [Exports](../modules.md) / HistGradientBoostingClassifierOptions

# Interface: HistGradientBoostingClassifierOptions

## Table of contents

### Properties

- [categorical\_features](HistGradientBoostingClassifierOptions.md#categorical_features)
- [class\_weight](HistGradientBoostingClassifierOptions.md#class_weight)
- [early\_stopping](HistGradientBoostingClassifierOptions.md#early_stopping)
- [interaction\_cst](HistGradientBoostingClassifierOptions.md#interaction_cst)
- [l2\_regularization](HistGradientBoostingClassifierOptions.md#l2_regularization)
- [learning\_rate](HistGradientBoostingClassifierOptions.md#learning_rate)
- [loss](HistGradientBoostingClassifierOptions.md#loss)
- [max\_bins](HistGradientBoostingClassifierOptions.md#max_bins)
- [max\_depth](HistGradientBoostingClassifierOptions.md#max_depth)
- [max\_iter](HistGradientBoostingClassifierOptions.md#max_iter)
- [max\_leaf\_nodes](HistGradientBoostingClassifierOptions.md#max_leaf_nodes)
- [min\_samples\_leaf](HistGradientBoostingClassifierOptions.md#min_samples_leaf)
- [monotonic\_cst](HistGradientBoostingClassifierOptions.md#monotonic_cst)
- [n\_iter\_no\_change](HistGradientBoostingClassifierOptions.md#n_iter_no_change)
- [random\_state](HistGradientBoostingClassifierOptions.md#random_state)
- [scoring](HistGradientBoostingClassifierOptions.md#scoring)
- [tol](HistGradientBoostingClassifierOptions.md#tol)
- [validation\_fraction](HistGradientBoostingClassifierOptions.md#validation_fraction)
- [verbose](HistGradientBoostingClassifierOptions.md#verbose)
- [warm\_start](HistGradientBoostingClassifierOptions.md#warm_start)

## Properties

### categorical\_features

• `Optional` **categorical\_features**: `number`

Indicates the categorical features.

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L718)

___

### class\_weight

• `Optional` **class\_weight**: `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. Note that these weights will be multiplied with sample\_weight (passed through the fit method) if `sample\_weight` is specified.

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L793)

___

### early\_stopping

• `Optional` **early\_stopping**: `boolean` \| ``"auto"``

If ‘auto’, early stopping is enabled if the sample size is larger than 10000. If `true`, early stopping is enabled, otherwise early stopping is disabled.

**`Default Value`**

`'auto'`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:748](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L748)

___

### interaction\_cst

• `Optional` **interaction\_cst**: ``"pairwise"`` \| ``"no_interaction"``

Specify interaction constraints, the sets of features which can interact with each other in child node splits.

Each item specifies the set of feature indices that are allowed to interact with each other. If there are more features than specified in these constraints, they are treated as if they were specified as an additional set.

The strings “pairwise” and “no\_interactions” are shorthands for allowing only pairwise or no interactions, respectively.

For instance, with 5 features in total, `interaction\_cst=\[{0, 1}\]` is equivalent to `interaction\_cst=\[{0, 1}, {2, 3, 4}\]`, and specifies that each branch of a tree will either only split on features 0 and 1 or only split on features 2, 3 and 4.

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:734](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L734)

___

### l2\_regularization

• `Optional` **l2\_regularization**: `number`

The L2 regularization parameter. Use 0 for no regularization.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L706)

___

### learning\_rate

• `Optional` **learning\_rate**: `number`

The learning rate, also known as *shrinkage*. This is used as a multiplicative factor for the leaves values. Use `1` for no shrinkage.

**`Default Value`**

`0.1`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L673)

___

### loss

• `Optional` **loss**: ``"auto"`` \| ``"log_loss"`` \| ``"binary_crossentropy"`` \| ``"categorical_crossentropy"``

The loss function to use in the boosting process.

For binary classification problems, ‘log\_loss’ is also known as logistic loss, binomial deviance or binary crossentropy. Internally, the model fits one tree per boosting iteration and uses the logistic sigmoid function (expit) as inverse link function to compute the predicted positive class probability.

For multiclass classification problems, ‘log\_loss’ is also known as multinomial deviance or categorical crossentropy. Internally, the model fits one tree per boosting iteration and per class and uses the softmax function as inverse link function to compute the predicted probabilities of the classes.

**`Default Value`**

`'log_loss'`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L662)

___

### max\_bins

• `Optional` **max\_bins**: `number`

The maximum number of bins to use for non-missing values. Before training, each feature of the input array `X` is binned into integer-valued bins, which allows for a much faster training stage. Features with a small number of unique values may use less than `max\_bins` bins. In addition to the `max\_bins` bins, one more bin is always reserved for missing values. Must be no larger than 255.

**`Default Value`**

`255`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L713)

___

### max\_depth

• `Optional` **max\_depth**: `number`

The maximum depth of each tree. The depth of a tree is the number of edges to go from the root to the deepest leaf. Depth isn’t constrained by default.

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L692)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations of the boosting process, i.e. the maximum number of trees for binary classification. For multiclass classification, `n\_classes` trees per iteration are built.

**`Default Value`**

`100`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L680)

___

### max\_leaf\_nodes

• `Optional` **max\_leaf\_nodes**: `number`

The maximum number of leaves for each tree. Must be strictly greater than 1. If `undefined`, there is no maximum limit.

**`Default Value`**

`31`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L687)

___

### min\_samples\_leaf

• `Optional` **min\_samples\_leaf**: `number`

The minimum number of samples per leaf. For small datasets with less than a few hundred samples, it is recommended to lower this value since only very shallow trees would be built.

**`Default Value`**

`20`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L699)

___

### monotonic\_cst

• `Optional` **monotonic\_cst**: `any`

Monotonic constraint to enforce on each feature are specified using the following integer values:

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:723](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L723)

___

### n\_iter\_no\_change

• `Optional` **n\_iter\_no\_change**: `number`

Used to determine when to “early stop”. The fitting process is stopped when none of the last `n\_iter\_no\_change` scores are better than the `n\_iter\_no\_change \- 1` -th-to-last one, up to some tolerance. Only used if early stopping is performed.

**`Default Value`**

`10`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:769](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L769)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo-random number generator to control the subsampling in the binning process, and the train/validation data split if early stopping is enabled. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:788](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L788)

___

### scoring

• `Optional` **scoring**: `string`

Scoring parameter to use for early stopping. It can be a single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)). If `undefined`, the estimator’s default scorer is used. If `scoring='loss'`, early stopping is checked w.r.t the loss value. Only used if early stopping is performed.

**`Default Value`**

`'loss'`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:755](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L755)

___

### tol

• `Optional` **tol**: `number`

The absolute tolerance to use when comparing scores. The higher the tolerance, the more likely we are to early stop: higher tolerance means that it will be harder for subsequent iterations to be considered an improvement upon the reference score.

**`Default Value`**

`1e-7`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:776](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L776)

___

### validation\_fraction

• `Optional` **validation\_fraction**: `number`

Proportion (or absolute size) of training data to set aside as validation data for early stopping. If `undefined`, early stopping is done on the training data. Only used if early stopping is performed.

**`Default Value`**

`0.1`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:762](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L762)

___

### verbose

• `Optional` **verbose**: `number`

The verbosity level. If not zero, print some information about the fitting process.

**`Default Value`**

`0`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:783](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L783)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble. For results to be valid, the estimator should be re-trained on the same data only. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:741](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L741)
