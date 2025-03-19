import numpy as np
import matplotlib.pyplot as plt

k = 100

def f(x):
    y = 0
    for n in range(-k, k + 1):
        if n == 0:
            continue
        y += (1j * (-1) ** n / n) * np.exp(1j * n * x)
    return y

X = np.linspace(-np.pi * 1.5, np.pi * 1.5, 1000)
Y = np.array([f(x) for x in X])

# Create figure with adjusted size
fig, ax = plt.subplots(figsize=(1, 1))

ax.plot(X, Y, linewidth=2.5, color='b')

xticks = np.arange(-np.pi, np.pi + np.pi / 2, np.pi / 2)
xtick_labels = [r"$-\pi$", r"$-\frac{\pi}{2}$", r"$0$", r"$\frac{\pi}{2}$", r"$\pi$"]
ax.set_xticks(xticks)
ax.set_xticklabels(xtick_labels, fontsize=24)
ax.tick_params(axis='both', labelsize=24)

ax.set_xlabel("$x$", fontsize=36)
ax.set_ylabel("$f(x)$", fontsize=36)

plt.subplots_adjust(left=0.05, right=0.95, top=0.95, bottom=0.1)

plt.show()
