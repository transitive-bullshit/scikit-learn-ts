[sklearn](../readme.md) / [Exports](../modules.md) / LearningCurveDisplayOptions

# Interface: LearningCurveDisplayOptions

## Table of contents

### Properties

- [score\_name](LearningCurveDisplayOptions.md#score_name)
- [test\_scores](LearningCurveDisplayOptions.md#test_scores)
- [train\_scores](LearningCurveDisplayOptions.md#train_scores)
- [train\_sizes](LearningCurveDisplayOptions.md#train_sizes)

## Properties

### score\_name

• `Optional` **score\_name**: `string`

The name of the score used in `learning\_curve`. It will be used to decorate the y-axis. If `undefined`, the generic name `"Score"` will be used.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L368)

___

### test\_scores

• `Optional` **test\_scores**: [`ArrayLike`](../modules.md#arraylike)[]

Scores on test set.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L363)

___

### train\_scores

• `Optional` **train\_scores**: [`ArrayLike`](../modules.md#arraylike)[]

Scores on training sets.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L358)

___

### train\_sizes

• `Optional` **train\_sizes**: [`ArrayLike`](../modules.md#arraylike)

Numbers of training examples that has been used to generate the learning curve.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L353)
