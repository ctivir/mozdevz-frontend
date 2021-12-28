import styled from "styled-components";

export const HomePage = styled.div`
  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem 0.5rem;

    .heroDescription {
      order: 1;
      .heroTitle {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: var(--extra-bold);
        padding-bottom: 2rem;
      }
    }
    .heroCover {
      margin-bottom: 2rem;

      .coverImage {
        width: 80%;
      }
    }
    @media (min-width: 720px) {
      flex-direction: row;
      padding: 4rem;

      .heroDescription {
        flex: 2;
        display: inherit;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .heroTitle {
          font-size: 2.5rem;
          text-align: left;
          text-transform: uppercase;
          font-weight: var(--extra-bold);
        }
      }
      .heroCover {
        flex: 1;
        order: 1;
        .coverImage {
          width: 30rem;
        }
      }
    }
  }

  .stats {
    background: var(--light-grey);
    padding: 2rem;

    .statsDescription {
      margin-bottom: 2rem;

      .codingIcon {
        display: none;
      }

      .statsTitle {
        text-align: center;
        font-size: 1.2rem;

        .hightlight {
          color: var(--primary);
        }
      }
    }
    .statsContainer {
    }
    @media (min-width: 720px) {
      .stats {
        padding: 4rem;

        .statsDescription {
          display: flex;
          justify-content: space-between;

          .codingIcon {
            display: block;
            img {
              width: 5rem;
            }
          }
        }
        .statsContainer {
          display: flex;
          gap: 8rem;
        }
      }
    }
  }

  .learn {
    .learnCover {
      .learnImage {
        width: 100%;
      }
    }

    .learnDescription {
      padding: 2rem;
      text-align: center;

      .learnTittle {
        margin-bottom: 1rem;
      }

      .learnText {
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }
    }
    @media (min-width: 720px) {
      display: flex;
      height: 24rem;
      * {
        flex-basis: 50%;
      }

      .learnCover > .learnImage {
        object-fit: cover;
        height: 100%;
      }

      .learnDescription {
        padding: 4rem;
        text-align: left;

        .learnTittle {
          width: 20ch;
          font-size: 2rem;
        }

        .learnText {
          font-size: 0.9rem;
          width: 80%;
          line-height: 1.7;
        }
      }
    }
  }

  .connection {
    padding: 2rem;
    background: var(--light-grey);
    text-align: center;

    .connectionDescription {
      margin-bottom: 2rem;

      .connectionTitle {
        text-transform: uppercase;
        margin-bottom: 0.5rem;
      }

      .connectionHightlight {
        color: var(--primary);
        font-size: 0.6rem;
      }
    }

    @media (min-width: 720px) {
      padding: 4rem;
      .connectionDescription {
        display: flex;
        justify-content: space-between;

        .connectionTitle {
          font-size: 2rem;
          width: 12ch;
          line-height: 1.4;
        }

        .connectionHightlight {
          font-size: 0.9rem;
        }
      }
    }
  }

  .partners {
    padding: 2rem;

    .partnersDescription {
      text-align: center;
      margin-bottom: 1.5rem;
      .partnersTitle {
        line-height: 1.7;
      }

      .partnersHightlight {
        font-size: 0.8rem;
      }
    }
    @media (min-width: 720px) {
      padding: 4rem;

      .partnersDescription {
        display: flex;
        justify-content: space-between;
      }
      .partnersTitle {
        font-size: 2rem;
      }
    }
  }
`;
