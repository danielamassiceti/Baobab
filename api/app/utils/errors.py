# Define custom error messages here

EMAIL_IN_USE = ({'message': 'User with that email already exists'}, 409)
UNAUTHORIZED = ({'message': 'Authentication is required to access this resource'}, 401)
BAD_CREDENTIALS = ({'message': 'Invalid credentials'}, 401)
FORBIDDEN = ({'message': 'Access to this resource is forbidden'}, 403)
CODE_NOT_VALID = ({'message': 'Valid code is required to reset a password'}, 401)
TOO_MANY_REQUESTS = ({'message': 'Too many requests'}, 429)
EVENT_NOT_FOUND = ({'message': 'No event exists with that ID'}, 409)
SECTION_NOT_FOUND = ({'message': 'No event exists with that ID'}, 409)
QUESTION_NOT_FOUND = ({'message': 'No event exists with that ID'}, 409)
FORM_NOT_FOUND = ({'message': 'No event exists with that ID'}, 409)
DB_NOT_AVAILABLE = ({'message': 'Unable to access the database'}, 500)

