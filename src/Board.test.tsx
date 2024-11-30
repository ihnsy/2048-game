import { describe, expect, test } from 'vitest';

import { initArr } from '@/Board.tsx'; // 경로는 프로젝트 구조에 맞게 수정

describe('initArr function', () => {
  test('returns a 4x4 array', () => {
    const result = initArr();
    expect(result.length).toBe(4); // 4개의 행
    result.forEach((row) => {
      expect(row.length).toBe(4); // 각 행에 4개의 열
    });
  });

  test('contains exactly two numbers (2 or 4)', () => {
    const result = initArr();
    const flatArray = result.flat(); // 2D 배열을 1D로 변환
    const nonNullValues = flatArray.filter((value) => value !== null);
    expect(nonNullValues.length).toBe(2); // 정확히 2개의 값
    nonNullValues.forEach((value) => {
      expect([2, 4]).toContain(value); // 값은 2 또는 4이어야 함
    });
  });

  test('other cells are null', () => {
    const result = initArr();
    const flatArray = result.flat();
    const nullValues = flatArray.filter((value) => value === null);
    expect(nullValues.length).toBe(14); // null은 정확히 14개여야 함
  });
});
