[sklearn](../readme.md) / [Exports](../modules.md) / PipelineFitTransformOptions

# Interface: PipelineFitTransformOptions

## Table of contents

### Properties

- [X](PipelineFitTransformOptions.md#x)
- [fit\_params](PipelineFitTransformOptions.md#fit_params)
- [y](PipelineFitTransformOptions.md#y)

## Properties

### X

• `Optional` **X**: `any`

Training data. Must fulfill input requirements of first step of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L575)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters passed to the `fit` method of each step, where each parameter name is prefixed such that parameter `p` for step `s` has key `s\_\_p`.

#### Defined in

[generated/pipeline/Pipeline.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L585)

___

### y

• `Optional` **y**: `any`

Training targets. Must fulfill label requirements for all steps of the pipeline.

#### Defined in

[generated/pipeline/Pipeline.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L580)
