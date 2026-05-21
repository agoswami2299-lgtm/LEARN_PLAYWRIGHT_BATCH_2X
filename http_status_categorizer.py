def categorize_status_code(code):
    if 200 <= code <= 299:
        return "Success"
    elif 300 <= code <= 399:
        return "Redirection"
    elif 400 <= code <= 499:
        return "Client Error"
    elif 500 <= code <= 599:
        return "Server Error"
    else:
        return "Invalid"

if __name__ == "__main__":
    try:
        code = int(input("Input: "))
        print(f"Output: {categorize_status_code(code)}")
    except ValueError:
        print("Output: Invalid")
