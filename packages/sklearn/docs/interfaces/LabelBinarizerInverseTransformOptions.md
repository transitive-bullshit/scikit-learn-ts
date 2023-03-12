[sklearn](../readme.md) / [Exports](../modules.md) / LabelBinarizerInverseTransformOptions

# Interface: LabelBinarizerInverseTransformOptions

## Table of contents

### Properties

- [Y](LabelBinarizerInverseTransformOptions.md#y)
- [threshold](LabelBinarizerInverseTransformOptions.md#threshold)

## Properties

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)

Target values. All sparse matrices are converted to CSR before inverse transformation.

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L376)

___

### threshold

• `Optional` **threshold**: `number`

Threshold used in the binary and multi-label cases.

Use 0 when `Y` contains the output of decision\_function (classifier). Use 0.5 when `Y` contains the output of predict\_proba.

If `undefined`, the threshold is assumed to be half way between neg\_label and pos\_label.

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L385)