/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Convert a collection of raw documents to a matrix of TF-IDF features.

  Equivalent to [`CountVectorizer`](sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer "sklearn.feature_extraction.text.CountVectorizer") followed by [`TfidfTransformer`](sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer "sklearn.feature_extraction.text.TfidfTransformer").

  Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)
 */
export class TfidfVectorizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: TfidfVectorizerOptions) {
    this.id = `TfidfVectorizer${crypto.randomUUID().split('-')[0]}`
    this.opts = opts || {}
  }

  get py(): PythonBridge {
    return this._py
  }

  set py(pythonBridge: PythonBridge) {
    this._py = pythonBridge
  }

  /**
    Initializes the underlying Python resources.

    This instance is not usable until the `Promise` returned by `init()` resolves.
   */
  async init(py: PythonBridge): Promise<void> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TfidfVectorizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
try: bridgeTfidfVectorizer
except NameError: bridgeTfidfVectorizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_TfidfVectorizer = {'input': ${
      this.opts['input'] ?? undefined
    }, 'encoding': ${this.opts['encoding'] ?? undefined}, 'decode_error': ${
      this.opts['decode_error'] ?? undefined
    }, 'strip_accents': ${
      this.opts['strip_accents'] ?? undefined
    }, 'lowercase': ${this.opts['lowercase'] ?? undefined}, 'preprocessor': ${
      this.opts['preprocessor'] ?? undefined
    }, 'tokenizer': ${this.opts['tokenizer'] ?? undefined}, 'analyzer': ${
      this.opts['analyzer'] ?? undefined
    }, 'stop_words': ${
      this.opts['stop_words'] ?? undefined
    }, 'token_pattern': ${
      this.opts['token_pattern'] ?? undefined
    }, 'ngram_range': ${this.opts['ngram_range'] ?? undefined}, 'max_df': ${
      this.opts['max_df'] ?? undefined
    }, 'min_df': ${this.opts['min_df'] ?? undefined}, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'vocabulary': ${this.opts['vocabulary'] ?? undefined}, 'binary': ${
      this.opts['binary'] ?? undefined
    }, 'dtype': ${this.opts['dtype'] ?? undefined}, 'norm': ${
      this.opts['norm'] ?? undefined
    }, 'use_idf': ${this.opts['use_idf'] ?? undefined}, 'smooth_idf': ${
      this.opts['smooth_idf'] ?? undefined
    }, 'sublinear_tf': ${this.opts['sublinear_tf'] ?? undefined}}

ctor_TfidfVectorizer = {k: v for k, v in ctor_TfidfVectorizer.items() if v is not None}`

    await this._py
      .ex`bridgeTfidfVectorizer[${this.id}] = TfidfVectorizer(**ctor_TfidfVectorizer)`

    this._isInitialized = true
  }

  /**
    Disposes of the underlying Python resources.

    Once `dispose()` is called, the instance is no longer usable.
   */
  async dispose() {
    if (this._isDisposed) {
      return
    }

    if (!this._isInitialized) {
      return
    }

    await this._py.ex`del bridgeTfidfVectorizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return a callable to process input data.

    The callable handles preprocessing, tokenization, and n-grams generation.
   */
  async build_analyzer(
    opts: TfidfVectorizerBuildAnalyzerOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before build_analyzer()'
      )
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_build_analyzer = {}

pms_TfidfVectorizer_build_analyzer = {k: v for k, v in pms_TfidfVectorizer_build_analyzer.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_build_analyzer = bridgeTfidfVectorizer[${this.id}].build_analyzer(**pms_TfidfVectorizer_build_analyzer)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_build_analyzer.tolist() if hasattr(res_TfidfVectorizer_build_analyzer, 'tolist') else res_TfidfVectorizer_build_analyzer`
  }

  /**
    Return a function to preprocess the text before tokenization.
   */
  async build_preprocessor(
    opts: TfidfVectorizerBuildPreprocessorOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before build_preprocessor()'
      )
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_build_preprocessor = {}

pms_TfidfVectorizer_build_preprocessor = {k: v for k, v in pms_TfidfVectorizer_build_preprocessor.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_build_preprocessor = bridgeTfidfVectorizer[${this.id}].build_preprocessor(**pms_TfidfVectorizer_build_preprocessor)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_build_preprocessor.tolist() if hasattr(res_TfidfVectorizer_build_preprocessor, 'tolist') else res_TfidfVectorizer_build_preprocessor`
  }

  /**
    Return a function that splits a string into a sequence of tokens.
   */
  async build_tokenizer(
    opts: TfidfVectorizerBuildTokenizerOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before build_tokenizer()'
      )
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_build_tokenizer = {}

pms_TfidfVectorizer_build_tokenizer = {k: v for k, v in pms_TfidfVectorizer_build_tokenizer.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_build_tokenizer = bridgeTfidfVectorizer[${this.id}].build_tokenizer(**pms_TfidfVectorizer_build_tokenizer)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_build_tokenizer.tolist() if hasattr(res_TfidfVectorizer_build_tokenizer, 'tolist') else res_TfidfVectorizer_build_tokenizer`
  }

  /**
    Decode the input into a string of unicode symbols.

    The decoding strategy depends on the vectorizer parameters.
   */
  async decode(opts: TfidfVectorizerDecodeOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TfidfVectorizer must call init() before decode()')
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_decode = {'doc': ${
      opts['doc'] ?? undefined
    }}

pms_TfidfVectorizer_decode = {k: v for k, v in pms_TfidfVectorizer_decode.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_decode = bridgeTfidfVectorizer[${this.id}].decode(**pms_TfidfVectorizer_decode)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_decode.tolist() if hasattr(res_TfidfVectorizer_decode, 'tolist') else res_TfidfVectorizer_decode`
  }

  /**
    Learn vocabulary and idf from training set.
   */
  async fit(opts: TfidfVectorizerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TfidfVectorizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_fit = {'raw_documents': ${
      opts['raw_documents'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_TfidfVectorizer_fit = {k: v for k, v in pms_TfidfVectorizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_fit = bridgeTfidfVectorizer[${this.id}].fit(**pms_TfidfVectorizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_fit.tolist() if hasattr(res_TfidfVectorizer_fit, 'tolist') else res_TfidfVectorizer_fit`
  }

  /**
    Learn vocabulary and idf, return document-term matrix.

    This is equivalent to fit followed by transform, but more efficiently implemented.
   */
  async fit_transform(opts: TfidfVectorizerFitTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TfidfVectorizer must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_fit_transform = {'raw_documents': ${
      opts['raw_documents'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_TfidfVectorizer_fit_transform = {k: v for k, v in pms_TfidfVectorizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_fit_transform = bridgeTfidfVectorizer[${this.id}].fit_transform(**pms_TfidfVectorizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_fit_transform.tolist() if hasattr(res_TfidfVectorizer_fit_transform, 'tolist') else res_TfidfVectorizer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: TfidfVectorizerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TfidfVectorizer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_TfidfVectorizer_get_feature_names_out = {k: v for k, v in pms_TfidfVectorizer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_get_feature_names_out = bridgeTfidfVectorizer[${this.id}].get_feature_names_out(**pms_TfidfVectorizer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_get_feature_names_out.tolist() if hasattr(res_TfidfVectorizer_get_feature_names_out, 'tolist') else res_TfidfVectorizer_get_feature_names_out`
  }

  /**
    Build or fetch the effective stop words list.
   */
  async get_stop_words(opts: TfidfVectorizerGetStopWordsOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before get_stop_words()'
      )
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_get_stop_words = {}

pms_TfidfVectorizer_get_stop_words = {k: v for k, v in pms_TfidfVectorizer_get_stop_words.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_get_stop_words = bridgeTfidfVectorizer[${this.id}].get_stop_words(**pms_TfidfVectorizer_get_stop_words)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_get_stop_words.tolist() if hasattr(res_TfidfVectorizer_get_stop_words, 'tolist') else res_TfidfVectorizer_get_stop_words`
  }

  /**
    Return terms per document with nonzero entries in X.
   */
  async inverse_transform(
    opts: TfidfVectorizerInverseTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_TfidfVectorizer_inverse_transform = {k: v for k, v in pms_TfidfVectorizer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_inverse_transform = bridgeTfidfVectorizer[${this.id}].inverse_transform(**pms_TfidfVectorizer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_inverse_transform.tolist() if hasattr(res_TfidfVectorizer_inverse_transform, 'tolist') else res_TfidfVectorizer_inverse_transform`
  }

  /**
    Transform documents to document-term matrix.

    Uses the vocabulary and document frequencies (df) learned by fit (or fit\_transform).
   */
  async transform(opts: TfidfVectorizerTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TfidfVectorizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_TfidfVectorizer_transform = {'raw_documents': ${
      opts['raw_documents'] ?? undefined
    }}

pms_TfidfVectorizer_transform = {k: v for k, v in pms_TfidfVectorizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfVectorizer_transform = bridgeTfidfVectorizer[${this.id}].transform(**pms_TfidfVectorizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfVectorizer_transform.tolist() if hasattr(res_TfidfVectorizer_transform, 'tolist') else res_TfidfVectorizer_transform`
  }

  /**
    A mapping of terms to feature indices.
   */
  get vocabulary_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before accessing vocabulary_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TfidfVectorizer_vocabulary_ = bridgeTfidfVectorizer[${this.id}].vocabulary_`

      // convert the result from python to node.js
      return this
        ._py`attr_TfidfVectorizer_vocabulary_.tolist() if hasattr(attr_TfidfVectorizer_vocabulary_, 'tolist') else attr_TfidfVectorizer_vocabulary_`
    })()
  }

  /**
    True if a fixed vocabulary of term to indices mapping is provided by the user.
   */
  get fixed_vocabulary_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before accessing fixed_vocabulary_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TfidfVectorizer_fixed_vocabulary_ = bridgeTfidfVectorizer[${this.id}].fixed_vocabulary_`

      // convert the result from python to node.js
      return this
        ._py`attr_TfidfVectorizer_fixed_vocabulary_.tolist() if hasattr(attr_TfidfVectorizer_fixed_vocabulary_, 'tolist') else attr_TfidfVectorizer_fixed_vocabulary_`
    })()
  }

  /**
    Terms that were ignored because they either:
   */
  get stop_words_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TfidfVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfVectorizer must call init() before accessing stop_words_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TfidfVectorizer_stop_words_ = bridgeTfidfVectorizer[${this.id}].stop_words_`

      // convert the result from python to node.js
      return this
        ._py`attr_TfidfVectorizer_stop_words_.tolist() if hasattr(attr_TfidfVectorizer_stop_words_, 'tolist') else attr_TfidfVectorizer_stop_words_`
    })()
  }
}

export interface TfidfVectorizerOptions {
  /**
    If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

    @defaultValue `'content'`
   */
  input?: 'filename' | 'file' | 'content'

  /**
    If bytes or files are given to analyze, this encoding is used to decode.

    @defaultValue `'utf-8'`
   */
  encoding?: string

  /**
    Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

    @defaultValue `'strict'`
   */
  decode_error?: 'strict' | 'ignore' | 'replace'

  /**
    Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any characters. `undefined` (default) does nothing.

    Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.11)").
   */
  strip_accents?: 'ascii' | 'unicode'

  /**
    Convert all characters to lowercase before tokenizing.

    @defaultValue `true`
   */
  lowercase?: boolean

  /**
    Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.
   */
  preprocessor?: any

  /**
    Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.
   */
  tokenizer?: any

  /**
    Whether the feature should be made of word or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

    If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

    @defaultValue `'word'`
   */
  analyzer?: 'word' | 'char' | 'char_wb'

  /**
    If a string, it is passed to \_check\_stop\_list and the appropriate stop list is returned. ‘english’ is currently the only supported string value. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).

    If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.

    If `undefined`, no stop words will be used. In this case, setting `max\_df` to a higher value, such as in the range (0.7, 1.0), can automatically detect and filter stop words based on intra corpus document frequency of terms.
   */
  stop_words?: 'english' | any[]

  /**
    Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

    If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.
   */
  token_pattern?: string

  /**
    The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.
   */
  ngram_range?: any

  /**
    When building the vocabulary ignore terms that have a document frequency strictly higher than the given threshold (corpus-specific stop words). If float in range \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

    @defaultValue `1`
   */
  max_df?: number

  /**
    When building the vocabulary ignore terms that have a document frequency strictly lower than the given threshold. This value is also called cut-off in the literature. If float in range of \[0.0, 1.0\], the parameter represents a proportion of documents, integer absolute counts. This parameter is ignored if vocabulary is not `undefined`.

    @defaultValue `1`
   */
  min_df?: number

  /**
    If not `undefined`, build a vocabulary that only consider the top `max\_features` ordered by term frequency across the corpus. Otherwise, all features are used.

    This parameter is ignored if vocabulary is not `undefined`.
   */
  max_features?: number

  /**
    Either a Mapping (e.g., a dict) where keys are terms and values are indices in the feature matrix, or an iterable over terms. If not given, a vocabulary is determined from the input documents.
   */
  vocabulary?: any

  /**
    If `true`, all non-zero term counts are set to 1. This does not mean outputs will have only 0/1 values, only that the tf term in tf-idf is binary. (Set idf and normalization to `false` to get 0/1 outputs).

    @defaultValue `false`
   */
  binary?: boolean

  /**
    Type of the matrix returned by fit\_transform() or transform().
   */
  dtype?: any

  /**
    Each output row will have unit norm, either:

    @defaultValue `'l2'`
   */
  norm?: 'l1' | 'l2'

  /**
    Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

    @defaultValue `true`
   */
  use_idf?: boolean

  /**
    Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

    @defaultValue `true`
   */
  smooth_idf?: boolean

  /**
    Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

    @defaultValue `false`
   */
  sublinear_tf?: boolean
}

export interface TfidfVectorizerBuildAnalyzerOptions {}

export interface TfidfVectorizerBuildPreprocessorOptions {}

export interface TfidfVectorizerBuildTokenizerOptions {}

export interface TfidfVectorizerDecodeOptions {
  /**
    The string to decode.
   */
  doc?: string
}

export interface TfidfVectorizerFitOptions {
  /**
    An iterable which generates either str, unicode or file objects.
   */
  raw_documents?: any

  /**
    This parameter is not needed to compute tfidf.
   */
  y?: any
}

export interface TfidfVectorizerFitTransformOptions {
  /**
    An iterable which generates either str, unicode or file objects.
   */
  raw_documents?: any

  /**
    This parameter is ignored.
   */
  y?: any
}

export interface TfidfVectorizerGetFeatureNamesOutOptions {
  /**
    Not used, present here for API consistency by convention.
   */
  input_features?: any
}

export interface TfidfVectorizerGetStopWordsOptions {}

export interface TfidfVectorizerInverseTransformOptions {
  /**
    Document-term matrix.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface TfidfVectorizerTransformOptions {
  /**
    An iterable which generates either str, unicode or file objects.
   */
  raw_documents?: any
}
