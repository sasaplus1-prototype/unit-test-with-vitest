export function sum(a: number, b: number): number {
  return a + b;
}

export function removeAllChildren(node: Node): void {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
