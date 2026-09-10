import { ExternalLink, EyeOff, FileVideo, ShieldCheck } from 'lucide-react';

const strengths = [
  {
    title: '문제를 끝까지 붙잡고 해결하려는 태도',
    situation:
      'Packet Tracer로 네트워크망을 구성하는 실습 중 장비 설정이나 연결 상태가 예상대로 작동하지 않는 문제가 있었습니다.',
    action:
      '바로 포기하지 않고 설정값, 연결 상태, 허용 및 차단 규칙을 하나씩 다시 확인하면서 문제가 생긴 지점을 찾았습니다.',
    result:
      '아직 보완 중인 작업이지만 네트워크가 작동하는 모습을 영상으로 확인했고, 문제를 해결하기 위해 끝까지 시도하는 태도를 보여줄 수 있었습니다.',
  },
  {
    title: '모르는 부분을 질문하고 확인하는 태도',
    situation:
      '팀 프로젝트나 실습을 진행하다 보면 혼자 판단하기 어려운 부분이나 방향이 헷갈리는 순간이 있었습니다.',
    action:
      '혼자 오래 막혀 있기보다 조원이나 강사님께 질문하고, 필요한 부분을 함께 확인하면서 다음에 해야 할 일을 정리했습니다.',
    result:
      '막히는 시간을 줄이고 작업 방향을 다시 잡을 수 있었으며, 팀원들과 더 안정적으로 실습을 이어갈 수 있었습니다.',
  },
  {
    title: '배운 내용을 다시 확인하고 정리하는 습관',
    situation:
      '수업이나 실습에서 배운 내용을 그대로 지나치면 나중에 같은 문제를 만났을 때 다시 헷갈릴 수 있었습니다.',
    action:
      '실습한 내용과 설정 과정을 다시 확인하고, 어떤 부분이 잘 되었고 어떤 부분을 보완해야 하는지 정리하려고 했습니다.',
    result:
      '같은 유형의 문제를 다시 만났을 때 더 빠르게 접근할 수 있고, 내가 공부한 과정을 작업물로 설명할 수 있게 되었습니다.',
  },
];

const publicItems = ['이름', '배우고 있는 기술', '공개 가능한 프로젝트와 활동'];
const privateItems = ['집주소', '계정 ID 및 비밀번호', '가족과 지인 정보'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-[1.1fr_0.9fr] gap-8 px-5 py-6 md:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-8">
          <nav
            aria-label="페이지 바로가기"
            className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600"
          >
            <a href="#intro">소개</a>
            <a href="#evidence">작업물</a>
            <a href="#work-video">영상</a>
            <a href="#strengths">강점</a>
            <a href="#checks">점검</a>
          </nav>

          <div id="intro" className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              T01 · 나를 소개하는 한 페이지
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-slate-950 md:text-6xl">
                함찬원의 네트워크 실습 소개
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                강사님과 조원분들에게 그동안 공부한 네트워크 실습 내용,
                문제를 해결해 온 과정, 그리고 공개 가능한 작업물을 보여주는
                페이지입니다.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="info-tile">
                <span>대상</span>
                <strong>강사님 · 조원분들</strong>
              </div>
              <div className="info-tile">
                <span>배우는 기술</span>
                <strong>네트워크 구성 · 보안 규칙</strong>
              </div>
              <div className="info-tile">
                <span>근거</span>
                <strong>Packet Tracer 작업물</strong>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="panel">
              <h2>공개할 정보</h2>
              <ul className="check-list">
                {publicItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="panel">
              <h2>공개하지 않을 정보</h2>
              <ul className="private-list">
                {privateItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <aside
          id="evidence"
          className="flex flex-col justify-between gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-teal-700">작업물 근거</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-950">
                  Packet Tracer 네트워크 실습 영상
                  <span className="ml-2 inline-block rounded bg-amber-100 px-2 py-1 align-middle text-sm font-semibold text-amber-900">
                    미완성
                  </span>
                </h2>
              </div>
              <FileVideo aria-hidden="true" className="mt-1 h-8 w-8 text-teal-700" />
            </div>

            <p className="leading-7 text-slate-700">
              Packet Tracer 실습 파일과 작동 확인 영상이 있으며, 현재는
              미완성 상태지만 네트워크 구성과 문제 해결 과정을 보여줄 수
              있습니다.
            </p>

            <div className="rounded-lg bg-slate-950 p-4 font-mono text-sm text-slate-100">
              <p>작업 파일</p>
              <p className="mt-3 text-teal-200">네트워크망 성공.pkt</p>
              <p className="text-teal-200">방화벽 설치 및 허용,차단 규칙.pkt</p>
              <p className="mt-3 text-amber-200">
                작동 확인 영상: Packet Tracer 네트워크 실습 영상 (미완성)
              </p>
            </div>
          </div>

          <a className="work-button" href="#work-video">
            <span>작업물 영상 보기 (미완성)</span>
            <ExternalLink aria-hidden="true" className="h-5 w-5" />
          </a>
        </aside>
      </section>

      <section id="strengths" className="section-wrap">
        <div className="section-heading">
          <p>상황 · 행동 · 결과</p>
          <h2>말이 아니라 근거로 보여주는 강점</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {strengths.map((strength, index) => (
            <article className="strength-card" key={strength.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{strength.title}</h3>
              <dl>
                <dt>상황</dt>
                <dd>{strength.situation}</dd>
                <dt>행동</dt>
                <dd>{strength.action}</dd>
                <dt>결과</dt>
                <dd>{strength.result}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="work-detail" className="section-wrap pt-0">
        <div className="work-detail">
          <div>
            <p className="text-sm font-semibold text-teal-700">상호작용 확인</p>
            <h2>작업물 버튼은 마우스와 키보드로 이동할 수 있습니다.</h2>
            <p>
              위의 버튼을 클릭하거나 Tab 키로 초점을 이동한 뒤 Enter 또는 Space로
              실행하면 작업물 영상 영역으로 이동합니다.
            </p>
          </div>
          <div className="motion-note">
            <ShieldCheck aria-hidden="true" className="h-7 w-7" />
            <p>
              큰 움직임 효과는 사용하지 않았고, 공개하지 않기로 한 개인정보와
              비밀번호·토큰·API 키 원문은 페이지에 넣지 않았습니다.
            </p>
          </div>
        </div>
      </section>

      <section id="work-video" className="section-wrap pt-0">
        <div className="video-panel">
          <div className="section-heading">
            <p>작동 확인 영상</p>
            <h2>Packet Tracer 네트워크 실습 영상</h2>
          </div>
          <video
            className="work-video"
            controls
            preload="metadata"
            src="/packet-tracer-demo-unfinished.mp4"
          >
            이 브라우저에서는 영상을 재생할 수 없습니다.
          </video>
          <p>
            현재 영상은 작동 확인용으로 첨부한 미완성 기록입니다. 최종 제출 전
            설명과 보완 내용을 더 정리할 예정입니다.
          </p>
        </div>
      </section>

      <section id="checks" className="section-wrap pt-0">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="panel">
            <div className="mb-4 flex items-center gap-3">
              <EyeOff aria-hidden="true" className="h-6 w-6 text-teal-700" />
              <h2>짧은 확인 방법 4줄</h2>
            </div>
            <ol className="number-list">
              <li>어디로 가나요: 공개된 개인 소개 페이지 첫 화면으로 갑니다.</li>
              <li>
                3단계 이내 무엇을 하나요: 작업물 영상 보기 버튼을 누르고,
                영상 영역과 강점 카드를 확인합니다.
              </li>
              <li>
                무엇이 보이면 통과인가요: 소개, 공개 범위, 작업물 근거,
                강점 3개가 보이면 통과입니다.
              </li>
              <li>
                안 될 때 무엇이 보이나요: 버튼 이동이 되지 않거나 영상
                플레이어가 보이지 않으면 수정이 필요합니다.
              </li>
            </ol>
          </section>

          <section className="panel">
            <h2>AI와 내 판단 3줄</h2>
            <ol className="number-list">
              <li>
                AI에게 맡긴 일: 과제 기준을 정리하고 소개 페이지 문장과 화면
                구성을 만드는 일을 맡겼습니다.
              </li>
              <li>
                직접 판단한 일: 공개할 정보, 공개하지 않을 정보, 작업물의
                미완성 표시 여부를 직접 정했습니다.
              </li>
              <li>
                AI 제안을 따르지 않은 일: 개인정보나 계정 정보처럼 공개하면 안
                되는 내용은 넣지 않기로 판단했습니다.
              </li>
            </ol>
          </section>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="panel">
            <h2>두 화면 검사 결과</h2>
            <ol className="number-list">
              <li>
                1366×768: 첫 화면에서 소개, 대상, 배우는 기술, 작업물 근거가
                함께 보이도록 구성했습니다.
              </li>
              <li>
                1920×1080: 본문 최대 폭을 제한해 지나치게 넓게 퍼지지 않도록
                했습니다.
              </li>
              <li>
                가로 넘침: 고정 폭 대신 반응형 그리드와 최대 폭을 사용해 가로
                스크롤이 생기지 않게 했습니다.
              </li>
            </ol>
          </section>

          <section className="panel">
            <h2>실제 결함 수정 전후</h2>
            <ol className="number-list">
              <li>
                수정 전: 작업물 영상 보기 버튼이 설명 영역으로만 이동했습니다.
                수정 후: 실제 영상 플레이어 영역으로 이동하도록 바꿨습니다.
              </li>
              <li>
                수정 전: 영상 파일을 페이지에서 재생할 수 없었습니다. 수정 후:
                mp4 파일을 공개 폴더에 넣고 video 플레이어로 연결했습니다.
              </li>
              <li>
                수정 전: 개발 서버가 mp4 파일 감시 중 잠금 오류로 멈췄습니다.
                수정 후: mp4 감시를 제외해 미리보기 화면이 안정적으로 열리게
                했습니다.
              </li>
            </ol>
          </section>
        </div>
      </section>
    </main>
  );
}
