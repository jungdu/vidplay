- 생성 방법 확인

```
sls create --help
```

- aws-nodejs lambda 프로젝트 생성

```
sls create --template aws-nodejs
```

- serverless.yml 설정

```
// 기본적으로 확인해야할 사항들
service:
provider:
stage:
region:
functions:
hello:
  handler: handler.hello
```

- 배포

```
sls deploy
```

- 프로젝트 제거

```
sls remove
```

- 함수 실행

```
sls invoke --fnction <함수명>
```
