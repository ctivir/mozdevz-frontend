import styled from "styled-components";

export const Container = styled.button`
  background: var(--primary);
  padding: 1rem 2rem;
  color: var(--white);
  border: 0;
  font-weight: 700;
  font-size: 0.9rem;
  transition: filter 0.4s;

  &:hover{
    filter: brightness(0.85)
  }

`