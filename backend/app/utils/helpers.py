"""Helper Functions"""

def str_from_email(s: str) -> str:
    """Reads an email as string and returns the first part of it."""
    return s.split('@')[0].replace('.', '')
