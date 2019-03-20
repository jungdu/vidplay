# vidplay

## http://vidplay.abouthorn.com

## vidplay 기능

AWS S3 버킷에 업로드된 동영상 파일을 재생하는 React 프론트 페이지. <br>
플레이어는 S3버킷과 동기화 되어 버킷내의 파일을 리스트로 출력 합니다.

## 사용 기술

- React
- Redux
- Redux-Thunk
- Axios

## 사용 방식

- 소스 빌드 후 빌드된 파일을 S3 버킷에 업로드.
- 소스를 빌드한 업로드를 Static website hosting 설정.
- 설정된 AWS S3 버킷에 동영상을 업로드. <br>(여기서 동영상을 업로드 하는 버킷은 웹서비스를 제공하는 버킷과는 다른 버킷 입니다.)

## 사용된 클라우드 서비스

- **API Gateway** : 클라이언트의 API요청을 받습니다.
- **S3 버킷** : 사용된 버킷은 2개로서 동영상파일 관리, 웹서비스 <br> 제공 기능을 합니다.
- **Route 53** : 도메인 연결을 위한 서비스.

위의 구조로 구성하여 서버 관리 포인트가 없다는 장점이 있습니다.

## 설정 사항

/src/config.js

```
export const serverUrl = "<API 서버 URL 경로>";
export const bucketUrl = "<S3 버킷의 URL 경로>";
```

### 예제에서 사용된 비디오 파일 출처 : https://coverr.co/

## 개선할 사항

- AWS CloudFront 를 사용하여 트레픽 줄이기
- 파일명 Hash 처리
- Thumbnail 자동 생성 기능
- 동영상 접근 인증 강화
