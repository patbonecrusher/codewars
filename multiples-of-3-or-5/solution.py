def solution4(number):
    l = [x for x in range(number) if not x%3 or not x%5]
    return sum(l)

def solution(number):
    return sum(x for x in range(number) if not x%3 or not x%5)

print(solution(4))
print(solution(6))
print(solution(16))
print(solution(3))
print(solution(5))