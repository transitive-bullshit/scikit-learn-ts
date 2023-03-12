[sklearn](../readme.md) / [Exports](../modules.md) / PipelineFitPredictOptions

# Interface: PipelineFitPredictOptions

## Table of contents

### Properties

- [X](PipelineFitPredictOptions.md#x)
- [fit\_params](PipelineFitPredictOptions.md#fit_params)
- [y](PipelineFitPredictOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Training data. Must fulfill input requirements of first step of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L558)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters passed to the `fit` method of each step, where each parameter name is prefixed such that parameter `p` for step `s` has key `s\_\_p`.

#### Defined in

[generated/pipeline/Pipeline.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L568)

___

### y

• `Optional` **y**: `any`

Training targets. Must fulfill label requirements for all steps of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L563)
