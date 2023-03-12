[sklearn](../readme.md) / [Exports](../modules.md) / NearestCentroidOptions

# Interface: NearestCentroidOptions

## Table of contents

### Properties

- [metric](NearestCentroidOptions.md#metric)
- [shrink\_threshold](NearestCentroidOptions.md#shrink_threshold)

## Properties

### metric

• `Optional` **metric**: `string`

Metric to use for distance computation. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values. Note that “wminkowski”, “seuclidean” and “mahalanobis” are not supported.

The centroids for the samples corresponding to each class is the point from which the sum of the distances (according to the metric) of all samples that belong to that particular class are minimized. If the `"manhattan"` metric is provided, this centroid is the median and for all other metrics, the centroid is now set to be the mean.

**`Default Value`**

`'euclidean'`

#### Defined in

[generated/neighbors/NearestCentroid.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L300)

___

### shrink\_threshold

• `Optional` **shrink\_threshold**: `number`

Threshold for shrinking centroids to remove features.

#### Defined in

[generated/neighbors/NearestCentroid.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L305)
