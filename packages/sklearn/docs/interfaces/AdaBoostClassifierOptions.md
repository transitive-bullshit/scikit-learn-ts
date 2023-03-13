# AdaBoostClassifierOptions

## Properties

### algorithm?

> `"SAMME"` \| `"SAMME.R"`

If ‘SAMME.R’ then use the SAMME.R real boosting algorithm. `estimator` must support calculation of class probabilities. If ‘SAMME’ then use the SAMME discrete boosting algorithm. The SAMME.R algorithm typically converges faster than SAMME, achieving a lower test error with fewer boosting iterations.

#### Default Value

`'SAMME.R'`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:715](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L715)

### base\_estimator?

> `any`

The base estimator from which the boosted ensemble is built. Support for sample weighting is required, as well as proper `classes\_` and `n\_classes\_` attributes. If `undefined`, then the base estimator is [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier") initialized with `max\_depth=1`.

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L725)

### estimator?

> `any`

The base estimator from which the boosted ensemble is built. Support for sample weighting is required, as well as proper `classes\_` and `n\_classes\_` attributes. If `undefined`, then the base estimator is [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier") initialized with `max\_depth=1`.

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L694)

### learning\_rate?

> `number`

Weight applied to each classifier at each boosting iteration. A higher learning rate increases the contribution of each classifier. There is a trade-off between the `learning\_rate` and `n\_estimators` parameters. Values must be in the range `(0.0, inf)`.

#### Default Value

`1`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L708)

### n\_estimators?

> `number`

The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\[1, inf)`.

#### Default Value

`50`

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L701)

### random\_state?

> `number`

Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/ensemble/AdaBoostClassifier.ts:720](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L720)
