const copyButton = document.querySelector('[data-copy-target="bibtex"]');
const toast = document.querySelector('.toast');

copyButton?.addEventListener('click', async () => {
  const source = document.getElementById(copyButton.dataset.copyTarget);
  if (!source) return;

  try {
    await navigator.clipboard.writeText(source.innerText);
    copyButton.textContent = 'Copied';
    toast?.classList.add('visible');
    window.setTimeout(() => {
      copyButton.textContent = 'Copy';
      toast?.classList.remove('visible');
    }, 1800);
  } catch {
    copyButton.textContent = 'Select to copy';
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(source);
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
