def min(a, b, c, d):
    arr = [a, b, c, d]
    for i in sorted(arr):
        return i

a, b, c, d = map(int, input().split())
print(min(a, b, c, d))