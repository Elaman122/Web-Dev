import re


def xor(a, b):
    if a == b:
        return False
    else:
        return True

x, y = map(int, input().split())
print(int(xor(x, y)))