[sklearn](../readme.md) / [Exports](../modules.md) / PipelineScoreOptions

# Interface: PipelineScoreOptions

## Table of contents

### Properties

- [X](PipelineScoreOptions.md#x)
- [sample\_weight](PipelineScoreOptions.md#sample_weight)
- [y](PipelineScoreOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Data to predict on. Must fulfill input requirements of first step of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L642)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

If not `undefined`, this argument is passed as `sample\_weight` keyword argument to the `score` method of the final estimator.

#### Defined in

[generated/pipeline/Pipeline.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L652)

___

### y

• `Optional` **y**: `any`

Targets used for scoring. Must fulfill label requirements for all steps of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L647)
