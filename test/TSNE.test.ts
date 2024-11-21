import * as sklearn from 'sklearn'
import { expect, test } from 'vitest'

test(
  `TSNE`,
  {
    timeout: 60_000
  },
  async () => {
    const py = await sklearn.createPythonBridge()

    const v = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [5, 1, 3, 3, 5, 4, 8, 8, 8, 10],
      [2, 8, 7, 10, 0, 9, 2, 4, 9, 1]
    ]

    const s = new sklearn.TSNE({ perplexity: 2 })
    await s.init(py)

    const res = await s.fit_transform({ X: v })
    expect(Array.isArray(res)).toBeTruthy()
    expect(res.length).toBe(v.length)
    for (const r of res) {
      expect(Array.isArray(r)).toBeTruthy()
      expect(r.length).toBe(2)
    }

    await s.dispose()
    await py.disconnect()
  }
)
