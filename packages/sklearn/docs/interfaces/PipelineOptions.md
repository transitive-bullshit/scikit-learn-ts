[sklearn](../readme.md) / [Exports](../modules.md) / PipelineOptions

# Interface: PipelineOptions

## Table of contents

### Properties

- [memory](PipelineOptions.md#memory)
- [steps](PipelineOptions.md#steps)
- [verbose](PipelineOptions.md#verbose)

## Properties

### memory

• `Optional` **memory**: `string`

Used to cache the fitted transformers of the pipeline. By default, no caching is performed. If a string is given, it is the path to the caching directory. Enabling caching triggers a clone of the transformers before fitting. Therefore, the transformer instance given to the pipeline cannot be inspected directly. Use the attribute `named\_steps` or `steps` to inspect estimators within the pipeline. Caching the transformers is advantageous when fitting is time consuming.

#### Defined in

[generated/pipeline/Pipeline.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L520)

___

### steps

• `Optional` **steps**: `any`

List of (name, transform) tuples (implementing `fit`/`transform`) that are chained in sequential order. The last transform must be an estimator.

#### Defined in

[generated/pipeline/Pipeline.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L515)

___

### verbose

• `Optional` **verbose**: `boolean`

If `true`, the time elapsed while fitting each step will be printed as it is completed.

**`Default Value`**

`false`

#### Defined in

[generated/pipeline/Pipeline.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/pipeline/Pipeline.ts#L527)