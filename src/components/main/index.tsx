import React from "react";
import * as S from "./style";
import Search from "src/assets/img/common/Search_icon.svg";
import ExFastival from "src/assets/img/main/Ex_Fastival_Img.svg";
import ExPolicy from "src/assets/img/main/Ex_Policy_Img.svg";
import Left from "src/assets/img/common/Left.svg";
import Right from "src/assets/img/common/Right.svg";

const Main = () => {
  return (
    <S.MainPage>
      <S.ContentsWrap>
        <S.Contents>
          <S.Section>
            <S.SearchWrap>
              <S.SearchImgWrap>
                <S.SearchImg src={Search}></S.SearchImg>
              </S.SearchImgWrap>
              <S.Search placeholder="검색어를 입력해주세요"></S.Search>
            </S.SearchWrap>
            <S.FestivalWrap>
              {Array.from({ length: 3 }).map((_, idx: number) => (
                <S.Festival key={idx}>
                  <S.FestivalImg src={ExFastival}></S.FestivalImg>
                  <S.FestivalTitle>영남 춤 축제</S.FestivalTitle>
                  <S.FestivalDate>축제 진행 중</S.FestivalDate>
                </S.Festival>
              ))}
            </S.FestivalWrap>
            <S.PolicyWrap>
              {Array.from({ length: 3 }).map((_, idx: number) => (
                <S.Policy key={idx}>
                  <S.Left>
                    <S.Wrap>
                      <S.PolicyTitle>
                        대전 동구, 7월 동네방네 현장스케치 개최...
                        ‘다문화가족’편
                      </S.PolicyTitle>
                      <S.PolicyDate>1일전</S.PolicyDate>
                    </S.Wrap>
                    <S.PolicyContent>
                      대전 동구는 7월 16일 '동네방네 현장스케치' 행사에서
                      다문화가족과 소통하며 다양한 지원정책을 공유했습니다.
                      박희조 구청장은 실효성 있는 정책 추진을 약속하고,
                      어르신들의 폭염 대비를 당부했습니다.
                    </S.PolicyContent>
                  </S.Left>
                  <S.Right>
                    <S.PolicyImg src={ExPolicy}></S.PolicyImg>
                  </S.Right>
                </S.Policy>
              ))}
              <S.PolicyLine></S.PolicyLine>
              <S.PolicyPageWrap>
                <S.CurrentNum>1</S.CurrentNum>
                <S.SumNum>/</S.SumNum>
                <S.SumNum style={{ marginRight: "10px" }}>10</S.SumNum>
                <S.Btn src={Left}></S.Btn>
                <S.Btn src={Right} style={{ marginRight: "10px" }}></S.Btn>
              </S.PolicyPageWrap>
            </S.PolicyWrap>
          </S.Section>
          <S.aside>
            <S.WriteWrap>
              <S.Write>
                <S.WriteTitle>추천글</S.WriteTitle>
                <S.WriteLine></S.WriteLine>
                <S.WriteContentWrap>
                  <S.WriteContent>
                    1. 부여군 가족센터, 글로벌 인재양성 프로그램 '눈떠보니
                    동화작가' 운영
                  </S.WriteContent>
                  <S.WriteContent>
                    2. 초록우산어린이재단, 창녕 다문화가정 후원금 500만원
                  </S.WriteContent>
                  <S.WriteContent>
                    3. 영양군, 다문화 가정 자녀 성장 지원...
                  </S.WriteContent>
                  <S.WriteContent>
                    4. [기획취재-다문화가정 자녀 교육의 현주소-3] 다문화가정의
                    교육과 한국어 교육
                  </S.WriteContent>
                </S.WriteContentWrap>
              </S.Write>
              <S.Write>
                <S.WriteTitle>최신글</S.WriteTitle>
                <S.WriteLine></S.WriteLine>
                <S.WriteContentWrap>
                  <S.WriteContent>
                    1. 부여군 가족센터, 글로벌 인재양성 프로그램 '눈떠보니
                    동화작가' 운영
                  </S.WriteContent>
                  <S.WriteContent>
                    2. 초록우산어린이재단, 창녕 다문화가정 후원금 500만원
                  </S.WriteContent>
                  <S.WriteContent>
                    3. 영양군, 다문화 가정 자녀 성장 지원...
                  </S.WriteContent>
                  <S.WriteContent>
                    4. [기획취재-다문화가정 자녀 교육의 현주소-3] 다문화가정의
                    교육과 한국어 교육
                  </S.WriteContent>
                </S.WriteContentWrap>
              </S.Write>
              <S.Write>
                <S.WriteTitle>인기글</S.WriteTitle>
                <S.WriteLine></S.WriteLine>
                <S.WriteContentWrap>
                  <S.WriteContent>
                    1. 부여군 가족센터, 글로벌 인재양성 프로그램 '눈떠보니
                    동화작가' 운영
                  </S.WriteContent>
                  <S.WriteContent>
                    2. 초록우산어린이재단, 창녕 다문화가정 후원금 500만원
                  </S.WriteContent>
                  <S.WriteContent>
                    3. 영양군, 다문화 가정 자녀 성장 지원...
                  </S.WriteContent>
                  <S.WriteContent>
                    4. [기획취재-다문화가정 자녀 교육의 현주소-3] 다문화가정의
                    교육과 한국어 교육
                  </S.WriteContent>
                </S.WriteContentWrap>
              </S.Write>
            </S.WriteWrap>
          </S.aside>
        </S.Contents>
      </S.ContentsWrap>
    </S.MainPage>
  );
};

export default Main;
