[sklearn](../readme.md) / [Exports](../modules.md) / PipelineFitOptions

# Interface: PipelineFitOptions

## Table of contents

### Properties

- [X](PipelineFitOptions.md#x)
- [fit\_params](PipelineFitOptions.md#fit_params)
- [y](PipelineFitOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Training data. Must fulfill input requirements of first step of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L541)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters passed to the `fit` method of each step, where each parameter name is prefixed such that parameter `p` for step `s` has key `s\_\_p`.

#### Defined in

[generated/pipeline/Pipeline.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L551)

___

### y

• `Optional` **y**: `any`

Training targets. Must fulfill label requirements for all steps of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L546)
