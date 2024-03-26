def count_substring(s: str, subs: str):
    cnt = 0
    for i in range(0, len(s) - len(subs) + 1):
        if s[i:i+len(subs)] == subs:
            cnt += 1
            
    return cnt

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)