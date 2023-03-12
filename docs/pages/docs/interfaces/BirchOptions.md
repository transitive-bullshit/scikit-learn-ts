# BirchOptions

## Properties

### branching\_factor?

> `number`

Maximum number of CF subclusters in each node. If a new samples enters such that the number of subclusters exceed the branching\_factor then that node is split into two nodes with the subclusters redistributed in each. The parent subcluster of that node is removed and two new subclusters are added as parents of the 2 split nodes.

#### Default Value

`50`

Defined in:  [generated/cluster/Birch.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/Birch.ts#L523)

### compute\_labels?

> `boolean`

Whether or not to compute labels for each fit.

#### Default Value

`true`

Defined in:  [generated/cluster/Birch.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/Birch.ts#L537)

### copy?

> `boolean`

Whether or not to make a copy of the given data. If set to `false`, the initial data will be overwritten.

#### Default Value

`true`

Defined in:  [generated/cluster/Birch.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/Birch.ts#L544)

### n\_clusters?

> `number`

Number of clusters after the final clustering step, which treats the subclusters from the leaves as new samples.

#### Default Value

`3`

Defined in:  [generated/cluster/Birch.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/Birch.ts#L530)

### threshold?

> `number`

The radius of the subcluster obtained by merging a new sample and the closest subcluster should be lesser than the threshold. Otherwise a new subcluster is started. Setting this value to be very low promotes splitting and vice-versa.

#### Default Value

`0.5`

Defined in:  [generated/cluster/Birch.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/Birch.ts#L516)
