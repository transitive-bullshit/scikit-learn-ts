# VotingClassifierOptions

## Properties

### estimators?

> `any`

Invoking the `fit` method on the `VotingClassifier` will fit clones of those original estimators that will be stored in the class attribute `self.estimators\_`. An estimator can be set to `'drop'` using [`set\_params`](#sklearn.ensemble.VotingClassifier.set_params "sklearn.ensemble.VotingClassifier.set_params").

Defined in:  [generated/ensemble/VotingClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L512)

### flatten\_transform?

> `boolean`

Affects shape of transform output only when voting=’soft’ If voting=’soft’ and flatten\_transform=`true`, transform method returns matrix with shape (n\_samples, n\_classifiers \* n\_classes). If flatten\_transform=`false`, it returns (n\_classifiers, n\_samples, n\_classes).

#### Default Value

`true`

Defined in:  [generated/ensemble/VotingClassifier.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L536)

### n\_jobs?

> `number`

The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/ensemble/VotingClassifier.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L529)

### verbose?

> `boolean`

If `true`, the time elapsed while fitting will be printed as it is completed.

#### Default Value

`false`

Defined in:  [generated/ensemble/VotingClassifier.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L543)

### voting?

> `"hard"` \| `"soft"`

If ‘hard’, uses predicted class labels for majority rule voting. Else if ‘soft’, predicts the class label based on the argmax of the sums of the predicted probabilities, which is recommended for an ensemble of well-calibrated classifiers.

#### Default Value

`'hard'`

Defined in:  [generated/ensemble/VotingClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L519)

### weights?

> [`ArrayLike`](../types/ArrayLike.md)

Sequence of weights (`float` or `int`) to weight the occurrences of predicted class labels (`hard` voting) or class probabilities before averaging (`soft` voting). Uses uniform weights if `undefined`.

Defined in:  [generated/ensemble/VotingClassifier.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L524)
