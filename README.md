# know-your-team
:construction: Get to really know the team you're working with

## Data Modeling

### Organization

| Attribute | Type | Description |
| --- | --- | --- |
| name | `String` | The name of the organization |
| email | `String` | The owner's email account |
| website | `String` | The organization's website url |

### Users

| Attribute | Type | Description |
| --- | --- | --- |
| first_name | `String` | The user's first name |
| last_name | `String` | The user's last name |
| job_title | `String` | The user's job title |
| email | `String` | The user's email account |
| role | `Enum<String>` | The role the user will have. Possible values are `employee`, `leader` and `admin` |

### Questions

| Attribute | Type | Description |
| --- | --- | --- |
| author | [`User`](#users) | The id of the user that created the question |
| question | `String` | The text of question that will be asked |
| state | `Enum<String>` | The state of the question. Possible values are `open` and `closed` |
| due_at | `Date` | The date and time the question will be closed |

### Answers

| Attribute | Type | Description |
| --- | --- | --- |
| author | [`User`](#users) | The id of the user that created the question |
| question | [`Question`](#questions) | The id of the question the answer is given for |
| answer | `String` | The answer the user gave to the question |
| private | `Boolean` | Whether or not the answer shall be private (only shown to the leaders). Defaults to `false` |

## Authors

| [<img src="https://github.com/grvcoelho.png?v=4&s=130" width="130px;"><br><sub>@grvcoelho</sub>](https://github.com/grvcoelho) |
| :---: |
