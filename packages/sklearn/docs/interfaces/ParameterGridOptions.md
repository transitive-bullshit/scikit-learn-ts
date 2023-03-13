# ParameterGridOptions

## Properties

### param\_grid?

> `any`

The parameter grid to explore, as a dictionary mapping estimator parameters to sequences of allowed values.

An empty dict signifies default parameters.

A sequence of dicts signifies a sequence of grids to search, and is useful to avoid exploring parameter combinations that make no sense or have no effect. See the examples below.

Defined in:  [generated/model\_selection/ParameterGrid.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L106)
