[sklearn](../readme.md) / [Exports](../modules.md) / ParameterGridOptions

# Interface: ParameterGridOptions

## Table of contents

### Properties

- [param\_grid](ParameterGridOptions.md#param_grid)

## Properties

### param\_grid

• `Optional` **param\_grid**: `any`

The parameter grid to explore, as a dictionary mapping estimator parameters to sequences of allowed values.

An empty dict signifies default parameters.

A sequence of dicts signifies a sequence of grids to search, and is useful to avoid exploring parameter combinations that make no sense or have no effect. See the examples below.

#### Defined in

[generated/model_selection/ParameterGrid.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L106)
