#

---

Install the dependencies

```sh
$ yarn install
```
Run the test
```sh
$ yarn run wdio
```

Because of the brevity of time:

1.  The newsletter's email input field setting was failing. I would have liked to debug it, but I wrote the whole test through anyway
2.  I would have liked to remove the duplication in the 'View the homepage' scenario
3.  I would have liked to extract the newsletter submission and some of the steps into a page object method
4.  Ideally I would have placed the newsletter tests into its own feature file
5.  I did not use up the whole 90mins but realised the dubugging to understand the input field may take me over the allocated time.
